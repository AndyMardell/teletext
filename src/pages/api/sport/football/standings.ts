import { NextApiRequest, NextApiResponse } from 'next'
import { footballHeaders as headers } from '@/lib/api/headers'

const getLeagueStandings = async ({ leagueId }: NextApiRequest['query']) => {
  const footballRes = await fetch(
    `${process.env.FOOTBALL_API}/standings/?league=${leagueId}&season=2022`,
    { headers }
  )
  const { response } = await footballRes.json()

  if (!response[0].league.standings.length) {
    return null
  }

  return response[0].league.standings[0]
}

export default async function Standings(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { leagueId } = req.query

  try {
    const leagueStandings = await getLeagueStandings({ leagueId })

    if (!leagueStandings) {
      return res.status(404).json({ message: 'Not found' })
    }

    return res.json(leagueStandings)
  } catch (err: any) {
    return res.status(500).json({ statusCode: 500, message: err.message })
  }
}
