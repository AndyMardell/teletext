import { useEffect, useState } from 'react'
import { getBaseUrl } from '@/lib/get-base-url'

interface LeagueInfo {
  league_id: number
  name: string
  type: string
  country: string
  country_code: string
  season: number
  season_start: string
  season_end: string
  logo: string
  flag: string
  standings: number
  is_current: number
}

export interface useFootballProps {
  leagueId?: string | string[]
}

export default function useFootball({ leagueId }: useFootballProps = {}) {
  const [info, setInfo] = useState<LeagueInfo>()
  const [standings, setStandings] = useState([])

  const params = new URLSearchParams({
    leagueId: (leagueId ? parseInt(leagueId.toString()) : 524).toString()
  })

  const getLeagueInfo = async () => {
    try {
      const res = await fetch(
        `${getBaseUrl()}/api/sport/football/league?${params}`
      )
      const infoData = await res.json()
      setInfo(infoData)
    } catch (err) {
      console.error(err)
    }
  }

  const getLeagueStandings = async () => {
    try {
      const res = await fetch(
        `${getBaseUrl()}/api/sport/football/standings?${params}`
      )
      const standingsData = await res.json()
      setStandings(standingsData)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    if (leagueId) {
      getLeagueInfo()
      getLeagueStandings()
    }
  }, [leagueId])

  return [
    {
      info,
      standings
    }
  ]
}
