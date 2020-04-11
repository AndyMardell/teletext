import { NextPage } from 'next'

import Layout from '../../components/global/Layout'
import TopHeadline from '../../components/news/TopHeadline'
import Divider from '../../components/global/Divider'
import Contents from '../../components/global/Contents'
import Highlight from '../../components/global/Highlight'

const Sport: NextPage = () => (
  <Layout title='Sport' color='green'>
    <TopHeadline category='Sports' />
    <Divider />
    <Contents category='sport' />
    <Highlight>Ceefax: Sports at your fingertips</Highlight>
  </Layout>
)

export default Sport
