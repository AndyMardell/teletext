import { useEffect, useState } from 'react'
import Axios from 'axios'

export interface useFootballProps {
  leagueId?: number
}

const useFootball = (props: useFootballProps = {}) => {
  const { leagueId } = props
  const [articles, setArticles] = useState([])

  const footballApiCall = async () => {
    try {
      const res = await Axios('/api/sport/football', {
        params: { leagueId: leagueId || 2 }
      })
      const standings = await res.data

      setArticles(standings)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    footballApiCall()
  }, [leagueId])

  return [articles]
}

export default useFootball
