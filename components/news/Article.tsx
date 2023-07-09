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

const Heading = styled.h1`
  margin-top: 0;
`

export default Article
