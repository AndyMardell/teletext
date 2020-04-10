import { NextPage } from 'next'
import Layout from '../../components/global/Layout'
import useNews from '../../hooks/useNews'
import { ArticleProps } from '../../components/news/Article/Article'
import styled from 'styled-components'

const News: NextPage = () => {
  const [articles] = useNews({
    count: 100
  })

  return (
    <Layout>
      {articles.map((article: ArticleProps, i: number) => (
        <Article>
          <Number>{301 + i}</Number> {article.name}
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