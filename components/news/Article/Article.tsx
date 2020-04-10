import { FunctionComponent } from 'react'
import styled from 'styled-components'

export interface ArticleProps {
  name: string
  url: string
  image: {
    url: string
  }
  description: string
  datePublished: string
  category: string
  headline: boolean
  ampUrl: string
}

interface Props {
  article: ArticleProps
}

const Article: FunctionComponent<Props> = ({ article }) => {
  return (
    <div>
      <Category>News</Category>
      <Heading>{article.name}</Heading>
      <div>{article.description}</div>
    </div>
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
  margin-bottom: 1rem;
`

export default Article
