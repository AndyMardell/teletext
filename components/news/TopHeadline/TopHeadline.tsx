import { FunctionComponent } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import slugify from 'slugify'
import useNews from '../../../hooks/useNews'
import { ArticleProps } from '../Article/Article'

const TopHeadline: FunctionComponent = () => {
  const [articles] = useNews({
    slug: 'top',
    pageSize: 1,
  })

  return (
    <div>
      {articles.map((article: ArticleProps) => (
        <div>
          <Category>News</Category>
          <Heading>
            <Link
              href={`/news/${slugify(article.title, {
                strict: true,
              })}`}
            >
              <a>
                <span>{article.title}</span> <Number>301</Number>
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
`

const Heading = styled.div`
  font-family: ${({ theme }) => theme.font.family.subheading};
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: 300;
  letter-spacing: -0.025em;
  text-transform: uppercase;

  a {
    display: flex;
    justify-content: space-between;
  }
`

export default TopHeadline
