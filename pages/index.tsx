import { useContext, useEffect } from 'react'
import { NextPage } from 'next'

import Layout from '../components/global/Layout'
import Hotkeys from '../components/global/Hotkeys'
import TopHeadline from '../components/news/TopHeadline'
import Divider from '../components/global/Divider'
import Contents from '../components/global/Contents'
import Highlight from '../components/global/Highlight'
import { ContentItem } from '../components/global/Contents/Item'
import Context from '../context'

const contentItems: ContentItem[] = [
  { title: 'News Headlines', number: 101, link: '/news' },
  { title: 'Sport', number: 300, link: '/sport' },
  { title: 'BBC Info', number: 199 },
  { title: 'Chess', number: 695 },
  { title: 'Community BBC2', number: 568 },
  { title: 'Entertainment', number: 650 },
  { title: 'Film Reviews', number: 500 },
  { title: 'Flights', number: 440 },
  { title: 'Games Reviews', number: 527 },
  { title: 'Horse Racing', number: 660 },
  { title: 'Lottery', number: 525 },
  { title: 'News for Region', number: 160 },
  { title: 'Newsround', number: 570 },
  { title: 'Radio', number: 640 },
  { title: 'Subtitling', number: 888 },
  { title: 'Top 40', number: 528 },
  { title: 'Travel', number: 430 },
  { title: 'TV Links', number: 615 },
  { title: 'TV Listings', number: 600 },
  { title: 'Weather', number: 400 }
]

const Home: NextPage = () => {
  const { context, setContext } = useContext(Context)

  console.log('Current context', context)

  useEffect(() => {
    setContext({
      number: 200
    })
  }, [])

  return (
    <Layout>
      <TopHeadline />
      <Divider />
      <Contents contentItems={contentItems} />
      <Highlight>Ceefax: The world at your fingertips</Highlight>
      <Hotkeys />
    </Layout>
  )
}

export default Home
