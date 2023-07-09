import { NextApiRequest, NextApiResponse } from 'next'
import { footballHeaders as headers } from '@/lib/api/headers'

const getLeague = async ({ leagueId }: NextApiRequest['query']) => {
  const footballRes = await fetch(
    `${process.env.FOOTBALL_API}/leagues/league/${leagueId}`,
    { headers }
  )
  const { api } = await footballRes.json()

  if (!api.leagues.length) {
    return null
  }

  return api.leagues[0]
}

export default async function League(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { leagueId } = req.query

  try {
    const league = await getLeague({ leagueId })

    if (!league) {
      return res.status(404).send('Not found')
    }

    return res.status(200).json(league)
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}
