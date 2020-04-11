import { NextPage } from 'next'

import Layout from '../components/global/Layout'
import Hotkeys from '../components/global/Hotkeys'
import TopHeadline from '../components/news/TopHeadline'
import Divider from '../components/global/Divider'
import Contents from '../components/global/Contents'
import Highlight from '../components/global/Highlight'

const Home: NextPage = () => (
  <Layout>
    <TopHeadline />
    <Divider />
    <Contents />
    <Highlight>Ceefax: The world at your fingertips</Highlight>
    <Hotkeys />
  </Layout>
)

export default Home
