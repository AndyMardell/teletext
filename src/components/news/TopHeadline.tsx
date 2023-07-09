import slugify from 'slugify'
import useNews from '@/hooks/useNews'
import { ArticleProps } from '@/components/news/Article'
import Headline from '@/components/global/Headline'

interface Props {
  category?: string
}

export default function TopHeadline({ category }: Props) {
  const [articles] = useNews({
    category,
    limit: 1
  })

  return (
    <div>
      {articles.map((article: ArticleProps, index: number) => (
        <Headline
          key={index}
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
