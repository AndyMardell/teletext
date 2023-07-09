import { NextApiRequest, NextApiResponse } from 'next'
import { bingHeaders as headers } from '@/lib/api/headers'

const getArticles = async ({ q, category }: NextApiRequest['query']) => {
  const params = new URLSearchParams({
    q: q?.toString() || '',
    category: category?.toString() || ''
  })

  const newsRes = await fetch(
    `${process.env.BING_API}/news${q ? '/search' : ''}?${params}`,
    { headers }
  )
  const { value: articles } = await newsRes.json()
  return articles
}

export default async function News(req: NextApiRequest, res: NextApiResponse) {
  const { q, category } = req.query

  try {
    const articles = await getArticles({ q, category })

    if (!articles.length) {
      return res.status(404).send('Not found')
    }

    return res.status(200).json(articles)
  } catch (err: any) {
    console.error(err)
    return res.status(500).json({ statusCode: 500, message: err.message })
  }
}
