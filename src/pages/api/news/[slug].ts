import { NextApiRequest, NextApiResponse } from 'next'
import { bingHeaders as headers } from '@/lib/api/headers'

const getArticles = async ({ slug }: NextApiRequest['query']) => {
  const params = new URLSearchParams({
    q: slug?.toString().split('-').join(' ') || ''
  })

  const newsRes = await fetch(`${process.env.BING_API}/news/search?${params}`, {
    headers
  })
  const { value: articles } = await newsRes.json()
  return articles
}

export default async function Single(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug } = req.query

  try {
    const articles = await getArticles({ slug })

    if (!articles) {
      return res.status(404).send('Not found')
    }

    return res.status(200).json(articles)
  } catch (err: any) {
    console.error(err)
    return res.status(500).json({ statusCode: 500, message: err.message })
  }
}
