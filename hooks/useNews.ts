import { useEffect, useState } from 'react'
import Axios from 'axios'

export interface useNewsProps {
  slug?: string | string[]
  q?: string
  limit?: number
  count?: number
  category?: string
}

const useNews = (props: useNewsProps = {}) => {
  const { slug, q, limit, count, category } = props

  const [articles, setArticles] = useState([])

  const newsApiCall = async () => {
    try {
      const res = await Axios(`/api/news${slug ? `/${slug.toString()}` : ''}`, {
        params: { q, count, category }
      })
      const fetchedArticles = await res.data

      setArticles(limit ? fetchedArticles.slice(0, limit) : fetchedArticles)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    newsApiCall()
  }, [slug, category])

  return [articles]
}

export default useNews
