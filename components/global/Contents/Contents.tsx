import { FunctionComponent } from 'react'
import styled from 'styled-components'
import Item from './Item'
import contents from './items'

interface Props {
  category?: string
}

const Contents: FunctionComponent<Props> = ({ category }) => {
  const contentItems = contents[category || 'home']

  return (
    <nav>
      <ItemWrapper>
        {Object.keys(contentItems).map((key, i) => (
          <Item key={i} item={contentItems[key]} number={key} />
        ))}
      </ItemWrapper>
    </nav>
  )
}

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
