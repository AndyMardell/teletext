import styled from 'styled-components'
import slugify from 'slugify'
import Link from 'next/link'
import Layout from '@/components/global/Layout'
import useNews from '@/hooks/useNews'
import { ArticleProps } from '@/components/news/Article'
import Highlight from '@/components/global/Highlight'

export default function News() {
  const [articles] = useNews({
    count: 100
  })

  return (
    <Layout title="Headlines">
      <main>
        {articles.map((article: ArticleProps, index: number) => (
          <Article key={index}>
            <Link href={`/news/${slugify(article.name, { strict: true })}`}>
              <Number>{301 + index}</Number> {article.name}
            </Link>
          </Article>
        ))}
      </main>
      <Highlight
        style={{ marginTop: '2rem' }}
        background="blue"
        color="yellow"
      >
        Home news digest <b>141</b>
      </Highlight>
      <Highlight
        background="yellow"
        color="blue"
        mb
      >
        How Ceefax switches to Digital TV <b>697</b>
      </Highlight>
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
  color: ${({ theme }) => theme.colors.lightblue};

  &:first-child {
    font-size: 1.5em;
    overflow: visible;
    white-space: normal;
    line-height: 1.2;
    text-transform: uppercase;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.white};
  }
`
