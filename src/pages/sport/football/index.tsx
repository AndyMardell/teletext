import Layout from '@/components/global/Layout'
import TopHeadline from '@/components/news/TopHeadline'
import Divider from '@/components/global/Divider'
import Contents from '@/components/global/Contents'
import Highlight from '@/components/global/Highlight'

export default function Football() {
  return (
    <Layout
      title="Football"
      color="green"
    >
      <TopHeadline category="Sports" />
      <Divider />
      <Contents category="football" />
      <Highlight mb>Ceefax: Football at your fingertips</Highlight>
    </Layout>
  )
}
