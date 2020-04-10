import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Layout from '../../components/global/Layout'
import Article, { ArticleProps } from '../../components/news/Article/Article'
import useNews from '../../hooks/useNews'

const Single: NextPage = () => {
  const { query } = useRouter()

  const [articles] = useNews({
    slug: query.slug,
    limit: 1
  })

  return (
    <Layout>
      {articles.map((article: ArticleProps) => (
        <Article article={article} />
      ))}
    </Layout>
  )
}

export default Single
