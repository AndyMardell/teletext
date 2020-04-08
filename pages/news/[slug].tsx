import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Layout from '../../components/global/Layout'
import styled from 'styled-components'
import { ArticleProps } from '../../components/news/Article/Article'
import useNews from '../../hooks/useNews'

const Single: NextPage = () => {
  const { query } = useRouter()

  const [articles] = useNews({
    slug: query.slug,
  })

  return (
    <Layout>
      {articles.map((article: ArticleProps) => (
        <div>
          <Category>News</Category>
          <Heading>{article.title}</Heading>
        </div>
      ))}
    </Layout>
  )
}

const Category = styled.div`
  color: ${({ theme }) => theme.colors.yellow};
`

const Heading = styled.div`
  font-family: ${({ theme }) => theme.font.family.subheading};
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: 300;
  letter-spacing: -0.025em;
  text-transform: uppercase;
`

export default Single
