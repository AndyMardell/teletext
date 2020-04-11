import { NextPage } from 'next'
import Layout from '../../components/global/Layout'
import useNews from '../../hooks/useNews'
import { ArticleProps } from '../../components/news/Article/Article'
import styled from 'styled-components'
import slugify from 'slugify'
import Link from 'next/link'

const News: NextPage = () => {
  const [articles] = useNews({
    count: 100
  })

  return (
    <Layout title='Headlines'>
      {articles.map((article: ArticleProps, i: number) => (
        <Article>
          <Link href={`/news/${slugify(article.name, { strict: true })}`}>
            <a>
              <Number>{301 + i}</Number> {article.name}
            </a>
          </Link>
        </Article>
      ))}
    </Layout>
  )
}

const Number = styled.span`
  color: ${({ theme }) => theme.colors.yellow};
`

const Article = styled.div`
  overflow: hidden;
  white-space: nowrap;
  margin: 0.5rem 0;
`

export default News
