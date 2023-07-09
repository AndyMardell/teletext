import { NextApiRequest, NextApiResponse } from 'next'
import { footballHeaders as headers } from '@/lib/api/headers'

const getLeagueStandings = async ({ leagueId }: NextApiRequest['query']) => {
  const footballRes = await fetch(
    `${process.env.FOOTBALL_API}/leagueTable/${leagueId}`,
    { headers }
  )
  const { api } = await footballRes.json()

  if (!api.standings.length) {
    return null
  }

  return api.standings[0]
}

export default async function Standings(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { leagueId } = req.query

  try {
    const leagueStandings = await getLeagueStandings({ leagueId })

    if (!leagueStandings) {
      return res.status(404).send('Not found')
    }

    res.status(200).json(leagueStandings)
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}
