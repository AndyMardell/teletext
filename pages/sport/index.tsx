import { NextPage } from 'next'

import Layout from '../../components/global/Layout'
import TopHeadline from '../../components/news/TopHeadline'
import Divider from '../../components/global/Divider'
import Contents from '../../components/global/Contents'
import Highlight from '../../components/global/Highlight'
import { ContentItem } from '../../components/global/Contents/Item'

const contentItems: ContentItem[] = [
  { title: 'Premier League', number: 401, link: '/sport/premier-league' }
]

const Sport: NextPage = () => (
  <Layout>
    <TopHeadline category='Sports' />
    <Divider />
    <Contents contentItems={contentItems} />
    <Highlight>Ceefax: Sports at your fingertips</Highlight>
  </Layout>
)

export default Sport
