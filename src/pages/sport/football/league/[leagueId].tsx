import { useRouter } from 'next/router'

import Layout from '@/components/global/Layout'
import Highlight from '@/components/global/Highlight'
import Headline from '@/components/global/Headline'
import Divider from '@/components/global/Divider'
import useFootball from '@/hooks/useFootball'
import LeagueTable from '@/components/sport/LeagueTable'

export default function League() {
  const { query } = useRouter()

  const [league] = useFootball({
    leagueId: query.leagueId
  })

  return (
    <Layout
      title="Football"
      color="green"
    >
      {league.info && (
        <>
          <Headline category="Sport">{league.info.name}</Headline>
          <Divider />
        </>
      )}
      <LeagueTable standings={league.standings} />
      <Highlight mb>Ceefax: Sports at your fingertips</Highlight>
    </Layout>
  )
}
