import { NextApiRequest, NextApiResponse } from 'next'
import Axios from 'axios'

const Single = async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query

  try {
    const newsRes = await Axios(`${process.env.BING_API}/news/search`, {
      headers: {
        'Ocp-Apim-Subscription-Key': process.env.BING_API_KEY,
      },
      params: {
        q: slug
          .toString()
          .split('-')
          .join(' '),
      },
    })
    const { value: articles } = await newsRes.data

    if (articles.length) {
      return res.status(200).json(articles)
    }

    res.status(404).send('Not found')
  } catch (err) {
    console.error(err)
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default Single
