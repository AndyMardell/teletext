import { FunctionComponent } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import slugify from 'slugify'
import useNews from '../../../hooks/useNews'
import { ArticleProps } from '../Article/Article'

const TopHeadline: FunctionComponent = () => {
  const [articles] = useNews({
    limit: 1
  })

  return (
    <div>
      {articles.map((article: ArticleProps) => (
        <div>
          <Category>News</Category>
          <Heading>
            <Link
              href={`/news/${slugify(article.name, {
                strict: true
              })}`}
            >
              <a>
                <span>{article.name}</span> <Number>301</Number>
              </a>
            </Link>
          </Heading>
        </div>
      ))}
    </div>
  )
}

const Category = styled.div`
  color: ${({ theme }) => theme.colors.yellow};
`

const Number = styled.span`
  color: ${({ theme }) => theme.colors.yellow};
  margin-left: 0.5em;
`

const Heading = styled.h2`
  margin-top: 0;

  a {
    display: flex;
    justify-content: space-between;
  }
`

export default TopHeadline
