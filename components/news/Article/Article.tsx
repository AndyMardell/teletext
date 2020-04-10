import { FunctionComponent } from 'react'

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

const Article: FunctionComponent<ArticleProps> = article => {
  return <div></div>
}

export default Article
