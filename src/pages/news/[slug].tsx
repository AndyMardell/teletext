import { useRouter } from 'next/router'
import Layout from '@/components/global/Layout'
import Article, { ArticleProps } from '@/components/news/Article'
import useNews from '@/hooks/useNews'
import Highlight from '@/components/global/Highlight'

export default function Single() {
  const { query } = useRouter()

  const [articles] = useNews({
    slug: query.slug,
    limit: 1
  })

  return (
    <Layout title="Headlines">
      {articles.map((article: ArticleProps, index: number) => (
        <Article
          key={index}
          article={article}
        />
      ))}
      <Highlight
        style={{ marginTop: '2rem' }}
        background="blue"
        color="yellow"
      >
        Home news digest <b>141</b>
      </Highlight>
      <Highlight
        background="yellow"
        color="blue"
      >
        How Ceefax switches to Digital TV <b>697</b>
      </Highlight>
    </Layout>
  )
}
