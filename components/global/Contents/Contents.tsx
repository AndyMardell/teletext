import { FunctionComponent } from 'react'
import styled from 'styled-components'
import Item, { ContentItem } from './Item'

interface Props {
  contentItems: ContentItem[]
}

const Contents: FunctionComponent<Props> = ({ contentItems }) => (
  <nav>
    <ItemWrapper>
      {contentItems.map((item: ContentItem, i: number) => (
        <Item key={i} item={item} />
      ))}
    </ItemWrapper>
  </nav>
)

const ItemWrapper = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0 2rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(10, auto);

  @media only screen and (max-width: 750px) {
    display: block;
  }

  &:hover li > div {
    opacity: 0.2;
  }
`

export default Contents
