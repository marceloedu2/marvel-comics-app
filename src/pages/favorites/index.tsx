import React, { useEffect, useState } from 'react'
import { Settings } from 'react-slick'

import AuthTemplate from '@/template/AuthenticationTemplate'
import CardsContainer from '@/widgets/CardsContainer'

import SliderContainer from '@/components/SliderContainer'
import CardDefault from '@/components/CardDefault'
import Card from '@/components/Card'

import { useToast } from '@/hooks/ToastHook'
import api from '@/services/api'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import theme from '@/styles/theme'

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

export type ComicsFavoritesProps = {
  id: string
  userId: string
  comicId: number
  description: string
  title: string
  url: string
  liked: boolean
}

export type charactersFavoritesProps = {
  id: string
  userId: string
  characterId: number
  description: string
  name: string
  url: string
  liked: boolean
}

const Favorites = () => {
  const { addToast } = useToast()

  const [comics, setComics] = useState<ComicsFavoritesProps[]>(
    [] as ComicsFavoritesProps[]
  )
  const [characters, setCharacters] = useState<charactersFavoritesProps[]>(
    [] as charactersFavoritesProps[]
  )

  useEffect(() => {
    getComicsFavorites().catch()
    getCharactersFavorites().catch()
  }, [])

  const getComicsFavorites = async () => {
    const { data } = await api.get('/comics/favorite')

    const comicsFavorites = data.map((comic: any) => {
      return {
        ...comic,
        liked: true
      }
    })
    setComics(comicsFavorites)
  }

  const getCharactersFavorites = async () => {
    const { data } = await api.get('/characters/favorite')

    const charactersFavorites = data.map((character: any) => {
      return {
        ...character,
        liked: true
      }
    })
    setCharacters(charactersFavorites)
  }

  const handlerComicUnfavorable = async (comicId: number) => {
    const index = comics.findIndex(comic => comic?.comicId === comicId)
    const name = comics[index].title
    delete comics[index]
    setComics(comics)

    await api.put(`/comics/favorite/${comicId}`)

    await addToast({
      title: `Comic removed`,
      description: `${name} removed successfully`,
      type: 'success'
    })
  }

  const handlerCharacterUnfavorable = async (characterId: number) => {
    const chartersEdit = characters
    const index = characters.findIndex(
      character => character?.characterId === characterId
    )
    const name = chartersEdit[index].name
    delete chartersEdit[index]
    setCharacters(chartersEdit)

    await api.put(`/characters/favorite/${characterId}`)

    await addToast({
      title: `Character removed`,
      description: `${name} removed successfully`,
      type: 'success'
    })
  }

  return (
    <AuthTemplate>
      <CardsContainer title="My Comics Favorites">
        <SliderContainer settings={settings}>
          {comics.length > 0 ? (
            comics.map(comic => {
              return (
                <Card
                  key={comic.id}
                  id={comic.comicId}
                  title={comic.title}
                  url={`comics/${comic.comicId}`}
                  imageUrl={comic.url}
                  liked={comic.liked}
                  onClickLike={() => handlerComicUnfavorable(comic.comicId)}
                />
              )
            })
          ) : (
            <CardDefault link="/comics" />
          )}
        </SliderContainer>
      </CardsContainer>
      <CardsContainer title="My Characters Favorites">
        <SliderContainer settings={settings}>
          {characters.length > 0 ? (
            characters.map(character => {
              return (
                <Card
                  key={character.id}
                  id={character.characterId}
                  title={character.name}
                  url={`characters/${character.characterId}`}
                  imageUrl={character.url}
                  liked={character.liked}
                  onClickLike={() =>
                    handlerCharacterUnfavorable(character.characterId)
                  }
                />
              )
            })
          ) : (
            <CardDefault link="/characters" />
          )}
        </SliderContainer>
      </CardsContainer>
    </AuthTemplate>
  )
}

export default Favorites
