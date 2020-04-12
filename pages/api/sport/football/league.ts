import { NextApiRequest, NextApiResponse } from 'next'
import Axios from 'axios'

const League = async (req: NextApiRequest, res: NextApiResponse) => {
  const { leagueId } = req.query

  try {
    const footballRes = await Axios(
      `${process.env.FOOTBALL_API}/leagues/league/${leagueId}`,
      {
        headers: {
          'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
          'x-rapidapi-key': process.env.FOOTBALL_API_KEY
        }
      }
    )
    const { api } = await footballRes.data

    res.status(200).json(api.leagues[0])
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default League
