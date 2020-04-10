import { FunctionComponent } from 'react'
import styled from 'styled-components'
import slugify from 'slugify'
import useNews from '../../../hooks/useNews'
import { ArticleProps } from '../Article/Article'
import Headline from '../../global/Headline'

interface Props {
  category?: string
}

const TopHeadline: FunctionComponent<Props> = ({ category }) => {
  const [articles] = useNews({
    category,
    limit: 1
  })

  return (
    <div>
      {articles.map((article: ArticleProps) => (
        <Headline
          category={category || 'News'}
          link={`/news/${slugify(article.name, {
            strict: true
          })}`}
          number={301}
        >
          {article.name}
        </Headline>
      ))}
    </div>
  )
}

export default TopHeadline
