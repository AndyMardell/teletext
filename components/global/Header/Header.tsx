import Link from 'next/link'
import { FunctionComponent } from 'react'
import Topbar from './Topbar'
import styled from 'styled-components'

interface Props {
  title?: string
  color?: string
}

const Header: FunctionComponent<Props> = ({ title, color }) => {
  return (
    <div>
      <Topbar />
      <Hero>
        <Logo>
          <Link href='/'>
            <a>
              <span>B</span>
              <span>B</span>
              <span>C</span>
            </a>
          </Link>
        </Logo>
        <Heading color={color}>{title || 'Ceefax'}</Heading>
      </Hero>
    </div>
  )
}

const Hero = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 1rem 0 2rem;
  line-height: 0.8;
`

const Logo = styled.div`
  font-family: ${({ theme }) => theme.font.family.heading};
  font-size: ${({ theme }) => theme.font.size.massive};
  color: ${({ theme }) => theme.colors.background};
  margin-right: 1rem;

  a {
    display: block;
  }

  span {
    display: inline-block;
    background: ${({ theme }) => theme.colors.white};
    padding-top: 0.1em;
    padding-left: 0.1em;
    margin-right: 0.1em;
  }
`

const Heading = styled.div`
  font-family: ${({ theme }) => theme.font.family.heading};
  font-size: ${({ theme }) => theme.font.size.massive};
  background: ${({ theme }) => theme.colors.blue};
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0 -0.1em black;
  padding: 2rem 2rem 0;
  flex-grow: 1;
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.yellow};
`

export default Header
