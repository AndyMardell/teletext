import { useEffect, useState } from 'react'
import Axios from 'axios'

export interface useNewsProps {
  slug?: string | string[]
  q?: string
  limit?: number
  count?: number
}

const useNews = (props: useNewsProps = {}) => {
  const { slug, q, limit, count } = props

  const [articles, setArticles] = useState([])

  const newsApiCall = async () => {
    try {
      const res = await Axios(`/api/news${slug ? `/${slug.toString()}` : ''}`, {
        params: { q, count }
      })
      const fetchedArticles = await res.data

      setArticles(limit ? fetchedArticles.slice(0, limit) : fetchedArticles)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    newsApiCall()
  }, [slug])

  return [articles]
}

export default useNews
