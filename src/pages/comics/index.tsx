import React, { useCallback, useEffect, useState } from 'react'
import AuthTemplate from '@/template/AuthenticationTemplate'
import ComicCard from '@/components/Card'
import CardsContainer from '@/widgets/CardsContainer'
import Pagination from '@/components/Pagination'

import { useToast } from '@/hooks/ToastHook'
import Loading from '@/components/Loading'
import api from '@/services/api'

type comicsProps = {
  id: number
  title: string
  description: string
  published: string
  url: string
  liked: boolean
}
type comicsControlProps = {
  currentPage: number
  maxPages: number
  total: number
}
type comicsDataProps = {
  comics: comicsProps[]
} & comicsControlProps

const Comics = () => {
  const { addToast } = useToast()
  const [loading, setLoading] = useState(true)

  const [comicsData, setComics] = useState<comicsProps[]>([] as comicsProps[])
  const [comicsControl, setComicsControl] = useState<comicsControlProps>({
    currentPage: 0,
    maxPages: 0,
    total: 0
  })

  const getComics = useCallback(async () => {
    setLoading(true)
    const { data: comicsData }: { data: comicsDataProps } = await api.post(
      '/comics',
      {
        page: comicsControl.currentPage
      }
    )

    setComicsControl({
      currentPage: comicsData.currentPage,
      maxPages: comicsData.maxPages,
      total: comicsData.total
    })

    setComics(comicsData.comics)
    setLoading(false)
  }, [comicsControl.currentPage])

  useEffect(() => {
    getComics().catch()
  }, [comicsControl.currentPage, getComics])

  const onClickLike = async ({ id, liked }: { id: number; liked: boolean }) => {
    const index = comicsData.findIndex(comic => comic.id === id)

    comicsData[index].liked = liked

    setComics(comicsData)

    if (liked) {
      await api.post('/comics/favorite', {
        id: comicsData[index].id,
        title: comicsData[index].title,
        description: comicsData[index].description,
        published: comicsData[index].published,
        url: comicsData[index].url
      })
    } else {
      await api.put(`/comics/favorite/${comicsData[index].id}`)
    }

    await addToast({
      title: `Comic ${liked ? 'saved' : 'removed'}`,
      description: `${comicsData[index].title} ${
        liked ? 'saved' : 'removed'
      } successfully`,
      type: liked ? 'success' : 'info'
    })
  }

  const onPageChange = ({ selected }: { selected: number }) => {
    setComicsControl({ ...comicsControl, currentPage: selected })
  }

  const onClickSearch = async (title: string) => {
    setLoading(true)
    if (title) {
      const { data: comicsData }: { data: comicsProps[] } = await api.post(
        '/comics/search',
        {
          title
        }
      )

      setComicsControl({
        currentPage: 0,
        maxPages: 0,
        total: 0
      })

      setComics(comicsData)
      setLoading(false)
    } else {
      return getComics().catch()
    }
  }

  return (
    <AuthTemplate>
      <CardsContainer title="Comics" onClickSearch={onClickSearch}>
        {!loading ? (
          comicsData?.map(comic => {
            return (
              <ComicCard
                key={comic.id}
                id={comic.id}
                title={comic.title}
                url={comic.url}
                liked={comic.liked}
                onClickLike={onClickLike}
              />
            )
          })
        ) : (
          <Loading />
        )}
        {comicsControl.maxPages > 0 && !loading && (
          <Pagination
            currentPage={comicsControl.currentPage}
            maxCount={comicsControl.maxPages}
            onPageChange={onPageChange}
          />
        )}
      </CardsContainer>
    </AuthTemplate>
  )
}

export default Comics
