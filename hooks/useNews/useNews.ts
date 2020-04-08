import { useEffect, useState } from 'react'
import Axios from 'axios'

import isSingle from './isSingle'

export interface useNewsProps {
  slug: string | string[]
  country?: string
  category?: string
  sources?: string
  q?: string
  qInTitle?: string
  pageSize?: number
  page?: number
}

const useNews = (props: useNewsProps) => {
  const {
    slug,
    country,
    category,
    sources,
    q,
    qInTitle,
    pageSize,
    page,
  } = props

  const [articles, setArticles] = useState([])

  const newsApiCall = async () => {
    const endpoint = slug.toString()

    try {
      const res = await Axios(`/api/news/${endpoint}`, {
        params: {
          country,
          category,
          sources,
          q,
          pageSize,
          page,
          qInTitle: isSingle(endpoint) ? endpoint : qInTitle,
        },
      })
      const fetchedArticles = await res.data
      setArticles(fetchedArticles.articles)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (slug) {
      newsApiCall()
    }
  }, [slug])

  return [articles]
}

export default useNews
