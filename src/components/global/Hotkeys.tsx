import Link from 'next/link'
import { useContext } from 'react'
import styled, { DefaultTheme } from 'styled-components'
import { ThemeContext } from 'styled-components'

export default function Hotkeys() {
  const { colors } = useContext(ThemeContext) as DefaultTheme

  return (
    <nav>
      <StyledUl>
        <li style={{ color: colors.red }}>
          <Link href="/news">Headlines</Link>
        </li>
        <li style={{ color: colors.green }}>
          <Link href="/sport">Sport</Link>
        </li>
        <li style={{ color: colors.yellow }}>
          <Link href="/tv">TV Listings</Link>
        </li>
        <li style={{ color: colors.lightblue }}>
          <Link href="/">A–Z Index</Link>
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
