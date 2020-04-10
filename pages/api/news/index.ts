import { NextApiRequest, NextApiResponse } from 'next'
import Axios from 'axios'

const News = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const newsRes = await Axios(`${process.env.BING_API}/news/search`, {
      headers: {
        'Ocp-Apim-Subscription-Key': process.env.BING_API_KEY
      },
      params: {
        q: req.query.q
      }
    })
    const { value: articles } = await newsRes.data

    res.status(200).json(articles)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default News
