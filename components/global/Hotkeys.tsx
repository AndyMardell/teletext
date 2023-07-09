import Link from 'next/link'
import { FunctionComponent, useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from 'styled-components'

const Hotkeys: FunctionComponent = () => {
  const { colors } = useContext(ThemeContext)

  return (
    <nav>
      <StyledUl>
        <li style={{ color: colors.red }}>
          <Link href="/news">
            <a>Headlines</a>
          </Link>
        </li>
        <li style={{ color: colors.green }}>
          <Link href="/sport">
            <a>Sport</a>
          </Link>
        </li>
        <li style={{ color: colors.yellow }}>
          <Link href="/tv">
            <a>TV Listings</a>
          </Link>
        </li>
        <li style={{ color: colors.lightblue }}>
          <Link href="/">
            <a>A–Z Index</a>
          </Link>
        </li>
      </StyledUl>
    </nav>
  )
}

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0;
  list-style: none;
  margin: 0.5em 0;
`

export default Hotkeys
