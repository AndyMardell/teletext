import Head from 'next/head'
import Layout from '@/components/global/Layout'
import Hotkeys from '@/components/global/Hotkeys'
import TopHeadline from '@/components/news/TopHeadline'
import Divider from '@/components/global/Divider'
import Contents from '@/components/global/Contents'
import Highlight from '@/components/global/Highlight'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Layout>
        <TopHeadline />
        <Divider />
        <Contents />
        <Highlight>Ceefax: The world at your fingertips</Highlight>
        <Hotkeys />
      </Layout>
    </>
  )
}
