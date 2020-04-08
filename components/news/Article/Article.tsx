import { FunctionComponent } from 'react'

export interface ArticleProps {
  source: object
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

const Article: FunctionComponent<ArticleProps> = (article) => {
  return <div></div>
}

export default Article
