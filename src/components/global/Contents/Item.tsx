import Link from 'next/link'
import styled from 'styled-components'

export interface ContentItem {
  title: string
  link?: string
}

export type ContentItems = Record<string, ContentItem>

interface Props {
  item: ContentItem
  number: string
}

export default function Item({ item, number }: Props) {
  if (item.link) {
    return (
      <li>
        <Link href={item.link}>
          <ItemContainer>
            <Title>{item.title}</Title>
            <div>{number}</div>
          </ItemContainer>
        </Link>
      </li>
    )
  }

  return (
    <li>
      <ItemContainer>
        <Title>{item.title}</Title>
        <div>{number}</div>
      </ItemContainer>
    </li>
  )
}

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
`

const Title = styled.div`
  color: ${({ theme }) => theme.colors.yellow};
`
