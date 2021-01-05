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
  url: string
  updated_at: string
  liked: boolean
}

type characterProps = {
  id: number
  description: string
  liked: boolean
  modified: string
  name: string
  url: string
}

const ComicsId = () => {
  const router = useRouter()
  const { addToast } = useToast()

  const { id } = router.query

  const [characters, setCharacters] = useState<characterProps[]>(
    {} as characterProps[]
  )
  const [comics, setComics] = useState<comicProps>({} as comicProps)

  const getCharacter = async () => {
    const { data } = await api.get(`/comics/${id}/characters`)

    setCharacters(data.characters)
  }

  const getComics = async () => {
    const { data } = await api.get(`/comics/one/${id}`)
    setComics(data)
  }

  const onClickLikeCharacter = async ({
    id,
    liked
  }: {
    id: number
    liked: boolean
  }) => {
    const index = characters.findIndex(character => character.id === id)

    characters[index].liked = liked
    if (liked) {
      await api.post('/characters/favorite', {
        id: characters[index].id,
        name: characters[index].name,
        description: characters[index].description,
        url: characters[index].url
      })
    } else {
      await api.put(`/characters/favorite/${characters[index].id}`)
    }

    await addToast({
      title: `Character ${liked ? 'saved' : 'removed'}`,
      description: `${characters[index].name} ${
        liked ? 'saved' : 'removed'
      } successfully`,
      type: liked ? 'success' : 'info'
    })
    setCharacters(characters)
  }

  useEffect(() => {
    if (!id) router.back()
    getCharacter().catch()
    getComics().catch()
  }, [id])

  return (
    <AuthTemplate>
      {comics && (
        <CardDescriptionContainer
          title="Comic"
          name={comics.title}
          description={comics.description}
          data={comics.updated_at}
          liked={comics.liked}
          image={comics.url}
        />
      )}

      <CardsContainer title=" Comics to Character">
        <SliderContainer settings={settings}>
          {characters.length > 0 ? (
            characters.map(character => {
              return (
                <Card
                  key={character.id}
                  id={character.id}
                  title={character.name}
                  url={`../characters/${character.id}`}
                  imageUrl={character.url}
                  liked={character.liked}
                  onClickLike={onClickLikeCharacter}
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

export default ComicsId
