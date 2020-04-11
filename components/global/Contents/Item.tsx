import { FunctionComponent } from 'react'
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

const Item: FunctionComponent<Props> = ({ item, number }) => {
  if (item.link) {
    return (
      <li>
        <Link href={item.link}>
          <a>
            <ItemContainer>
              <Title>{item.title}</Title>
              <div>{number}</div>
            </ItemContainer>
          </a>
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

export default Item
