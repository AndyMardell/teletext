import Layout from '@/components/global/Layout'
import TopHeadline from '@/components/news/TopHeadline'
import Divider from '@/components/global/Divider'
import Contents from '@/components/global/Contents'
import Highlight from '@/components/global/Highlight'

export default function Sport() {
  return (
    <Layout
      title="Sport"
      color="green"
    >
      <TopHeadline category="Sports" />
      <Divider />
      <Contents category="sport" />
      <Highlight mb>Ceefax: Sports at your fingertips</Highlight>
    </Layout>
  )
}
