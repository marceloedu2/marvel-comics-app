import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import AuthTemplate from '@/template/AuthenticationTemplate'
import api from '@/services/api'
import CardsContainer from '@/widgets/CardsContainer'
import SliderContainer from '@/components/SliderContainer'
import Card from '@/components/Card'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Settings } from 'react-slick'
import theme from '@/styles/theme'
import CardDescriptionContainer from '@/widgets/CardDescriptionContainer'
import { useToast } from '@/hooks/ToastHook'

const settings: Settings = {
  vertical: false,
  verticalSwiping: false,
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  nextArrow: <IoIosArrowForward color={theme.colors.Primary} />,
  prevArrow: <IoIosArrowBack color={theme.colors.Primary} />
}

type comicProps = {
  id: number
  title: string
  description: string
  modified: string
  url: string
  liked: boolean
}

type characterProps = {
  id: string
  characterId: number
  created_at: string
  description: string
  liked: boolean
  name: string
  updated_at: string
  url: string
}

const CharactersId = () => {
  const router = useRouter()
  const { addToast } = useToast()
  const { id } = router.query

  const [comics, setComics] = useState<comicProps[]>([] as comicProps[])

  const [character, setCharacter] = useState<characterProps>(
    {} as characterProps
  )

  const getComics = async () => {
    const { data } = await api.get(`/characters/${id}/comics`)
    setComics(data.comics)
  }

  const getCharacter = async () => {
    const { data } = await api.get(`/characters/one/${id}`)

    setCharacter(data)
  }

  const onClickLikeComic = async ({
    id,
    liked
  }: {
    id: number
    liked: boolean
  }) => {
    const index = comics.findIndex(comic => comic.id === id)

    comics[index].liked = liked

    setComics(comics)

    if (liked) {
      await api.post('/comics/favorite', {
        id: comics[index].id,
        title: comics[index].title,
        description: comics[index].description,
        url: comics[index].url
      })
    } else {
      await api.put(`/comics/favorite/${comics[index].id}`)
    }

    await addToast({
      title: `Comic ${liked ? 'saved' : 'removed'}`,
      description: `${comics[index].title} ${
        liked ? 'saved' : 'removed'
      } successfully`,
      type: liked ? 'success' : 'info'
    })
  }

  useEffect(() => {
    if (!id) router.back()
    getCharacter().catch()
    getComics().catch()
  }, [id])

  return (
    <AuthTemplate>
      {character && (
        <CardDescriptionContainer
          title="Character:"
          name={character.name}
          description={character.description}
          data={character.updated_at}
          liked={character.liked}
          image={character.url}
        />
      )}

      <CardsContainer title=" Comics to Character:">
        <SliderContainer settings={settings}>
          {comics.length > 0 ? (
            comics.map(comic => {
              return (
                <Card
                  key={comic.id}
                  id={comic.id}
                  title={comic.title}
                  url={`comics/${comic.id}`}
                  imageUrl={comic.url}
                  liked={comic.liked}
                  onClickLike={onClickLikeComic}
                />
              )
            })
          ) : (
            <div>Without comcs</div>
          )}
        </SliderContainer>
      </CardsContainer>
    </AuthTemplate>
  )
}

export default CharactersId
