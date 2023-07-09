import { useEffect, useState } from 'react'
import Axios from 'axios'
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

export default function useFootball(props: useFootballProps = {}) {
  const { leagueId } = props
  const [info, setInfo] = useState<LeagueInfo>()
  const [standings, setStandings] = useState([])

  const getLeagueInfo = async () => {
    try {
      const res = await Axios(`${getBaseUrl()}/api/sport/football/league`, {
        params: { leagueId: leagueId ? parseInt(leagueId.toString()) : 524 }
      })
      const infoData = await res.data

      setInfo(infoData)
    } catch (err) {
      console.error(err)
    }
  }

  const getLeagueStandings = async () => {
    try {
      const res = await Axios(`${getBaseUrl()}/api/sport/football/standings`, {
        params: { leagueId: leagueId ? parseInt(leagueId.toString()) : 524 }
      })
      const standingsData = await res.data

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
