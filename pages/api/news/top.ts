import { NextApiRequest, NextApiResponse } from 'next'
import Axios from 'axios'

const top = async (req: NextApiRequest, res: NextApiResponse) => {
  const { country, category, sources, q, pageSize, page } = req.query

  try {
    const newsRes = await Axios(`${process.env.NEWS_API}/top-headlines`, {
      params: {
        apiKey: process.env.NEWS_API_KEY,
        country,
        category,
        sources: sources || 'bbc-news',
        q,
        pageSize,
        page,
      },
    })
    const data = await newsRes.data

    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default top
