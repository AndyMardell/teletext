import { NextApiRequest, NextApiResponse } from 'next'
import Axios from 'axios'

const News = async (req: NextApiRequest, res: NextApiResponse) => {
  const { q, category } = req.query

  try {
    const newsRes = await Axios(
      `${process.env.BING_API}/news${q ? '/search' : ''}`,
      {
        headers: {
          'Ocp-Apim-Subscription-Key': process.env.BING_API_KEY
        },
        params: { q, category }
      }
    )
    const { value: articles } = await newsRes.data

    res.status(200).json(articles)
  } catch (err: any) {
    console.error(err)
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default News
