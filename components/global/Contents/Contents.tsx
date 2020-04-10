import { FunctionComponent } from 'react'
import styled from 'styled-components'

const contentItems: ContentItem[] = [
  { title: 'BBC Info', number: 199 },
  { title: 'Chess', number: 695 },
  { title: 'Community BBC2', number: 568 },
  { title: 'Entertainment', number: 650 },
  { title: 'Film Reviews', number: 500 },
  { title: 'Flights', number: 440 },
  { title: 'Games Reviews', number: 527 },
  { title: 'Horse Racing', number: 660 },
  { title: 'Lottery', number: 525 },
  { title: 'News Headlines', number: 101 },
  { title: 'News for Region', number: 160 },
  { title: 'Newsround', number: 570 },
  { title: 'Radio', number: 640 },
  { title: 'Sport', number: 300 },
  { title: 'Subtitling', number: 888 },
  { title: 'Top 40', number: 528 },
  { title: 'Travel', number: 430 },
  { title: 'TV Links', number: 615 },
  { title: 'TV Listings', number: 600 },
  { title: 'Weather', number: 400 }
]

export interface ContentItem {
  title: string
  number: number
}

const Contents: FunctionComponent = () => (
  <nav>
    <ItemWrapper>
      {contentItems.map((item: ContentItem, i: number) => (
        <Item key={i}>
          <Title>{item.title}</Title>
          <div>{item.number}</div>
        </Item>
      ))}
    </ItemWrapper>
  </nav>
)

const ItemWrapper = styled.ul`
  list-style: none;
  padding: 1em 0;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0.5rem 2rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(10, auto);

  @media only screen and (max-width: 750px) {
    display: block;
  }
`

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
`

const Title = styled.div`
  color: ${({ theme }) => theme.colors.yellow};
`

export default Contents
