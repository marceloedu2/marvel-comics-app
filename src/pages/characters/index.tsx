import React, { useCallback, useEffect, useState } from 'react'
import AuthTemplate from '@/template/AuthenticationTemplate'
import CardsContainer from '@/widgets/CardsContainer'
import Pagination from '@/components/Pagination'
import ComicCard from '@/components/Card'
import Loading from '@/components/Loading'
import { useToast } from '@/hooks/ToastHook'
import api from '@/services/api'

type characterProps = {
  id: number
  name: string
  description: string
  url: string
  liked: boolean
}

const Characters = () => {
  const { addToast } = useToast()

  const [loading, setLoading] = useState(false)
  const [characters, setCharacters] = useState<characterProps[]>(
    [] as characterProps[]
  )
  const [charactersControl, setCharactersControl] = useState({
    currentPage: 0,
    maxPages: 0,
    total: 0
  })
  const getCharacters = useCallback(async () => {
    setLoading(true)
    const { data: charactersData } = await api.post('/characters', {
      page: charactersControl.currentPage
    })

    setCharactersControl({
      currentPage: charactersData.currentPage,
      maxPages: charactersData.maxPages,
      total: charactersData.total
    })
    setCharacters(charactersData.characters)
    setLoading(false)
  }, [charactersControl.currentPage])

  useEffect(() => {
    getCharacters().catch()
  }, [charactersControl.currentPage, getCharacters])

  const onClickLike = async ({ id, liked }: { id: number; liked: boolean }) => {
    const index = characters.findIndex(comic => comic.id === id)

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

  const onPageChange = ({ selected }: { selected: number }) => {
    setCharactersControl({ ...charactersControl, currentPage: selected })
  }

  const onClickSearch = async (name: string) => {
    if (name) {
      setLoading(true)
      const {
        data: charactersData
      }: { data: characterProps[] } = await api.post('/characters/search', {
        name
      })

      setCharactersControl({
        currentPage: 0,
        maxPages: 0,
        total: 0
      })

      setCharacters(charactersData)
      setLoading(false)
    } else {
      return getCharacters().catch()
    }
  }
  return (
    <AuthTemplate>
      <CardsContainer title="Characters" onClickSearch={onClickSearch}>
        {!loading ? (
          characters?.map(character => {
            return (
              <ComicCard
                key={character.id}
                id={character.id}
                title={character.name}
                url={character.url}
                liked={character.liked}
                onClickLike={onClickLike}
              />
            )
          })
        ) : (
          <Loading />
        )}
        {charactersControl.maxPages > 0 && !loading && (
          <div>
            <Pagination
              maxCount={charactersControl.maxPages}
              currentPage={charactersControl.currentPage}
              onPageChange={onPageChange}
            />
          </div>
        )}
      </CardsContainer>
    </AuthTemplate>
  )
}

export default Characters
