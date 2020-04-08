import { NextPage } from 'next'
import Layout from '../components/global/Layout'
import TopHeadline from '../components/news/TopHeadline'
import Divider from '../components/global/Divider'
import Contents from '../components/global/Contents'

const Home: NextPage = () => (
  <Layout>
    <TopHeadline />
    <Divider />
    <Contents />
  </Layout>
)

export default Home
