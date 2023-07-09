import { NextPage } from 'next'
import styled from 'styled-components'
import slugify from 'slugify'
import Link from 'next/link'

import Layout from '../../../components/global/Layout'
import useNews from '../../../hooks/useNews'
import { ArticleProps } from '../../../components/news/Article'

const SportHeadlines: NextPage = () => {
  const [articles] = useNews({
    category: 'Sports',
    count: 100
  })

  return (
    <Layout title="Headlines">
      {articles.map((article: ArticleProps, index: number) => (
        <Article key={index}>
          <Link href={`/news/${slugify(article.name, { strict: true })}`}>
            <a>
              <Number>{303 + index}</Number> {article.name}
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

export default SportHeadlines
