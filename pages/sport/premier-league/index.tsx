import { NextPage } from 'next'

import Layout from '../../../components/global/Layout'
import Highlight from '../../../components/global/Highlight'
import Headline from '../../../components/global/Headline'
import Divider from '../../../components/global/Divider'
import useFootball from '../../../hooks/useFootball'
import LeagueTable from '../../../components/sport/LeagueTable'

const Sport: NextPage = () => {
  const [standings] = useFootball({
    leagueId: 524
  })

  return (
    <Layout>
      <Headline category='Sport'>Premier League</Headline>
      <Divider />
      <LeagueTable standings={standings} />
      <Highlight>Ceefax: Sports at your fingertips</Highlight>
    </Layout>
  )
}

export default Sport
