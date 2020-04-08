import { NextApiRequest, NextApiResponse } from 'next'
import Axios from 'axios'

const single = async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query

  try {
    const newsRes = await Axios(`${process.env.NEWS_API}/everything`, {
      params: {
        apiKey: process.env.NEWS_API_KEY,
        qInTitle: encodeURI(
          slug
            .toString()
            .split('-')
            .join(' ')
        ),
      },
    })
    const data = await newsRes.data

    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default single
