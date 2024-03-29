import { useEffect, useState } from 'react'

export interface useNewsProps {
  slug?: string | string[]
  q?: string
  limit?: number
  count?: number
  category?: string
}

export default function useNews({
  slug,
  q,
  limit,
  count,
  category
}: useNewsProps = {}) {
  const [articles, setArticles] = useState([])

  const params = new URLSearchParams({
    q: q?.toString() || '',
    count: count?.toString() || '',
    category: category?.toString() || ''
  })

  const newsApiCall = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/news${
          slug ? `/${slug.toString()}` : ''
        }?${params}`
      )

      const fetchedArticles = await res.json()
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
