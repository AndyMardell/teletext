import { FunctionComponent } from 'react'
import Topbar from './Topbar'
import styled from 'styled-components'

const Header: FunctionComponent = () => {
  return (
    <div>
      <Topbar />
      <Hero>
        <Logo>BBC</Logo>
        <Heading>Ceefax</Heading>
      </Hero>
    </div>
  )
}

const Hero = styled.div`
  display: flex;
  margin: 1rem 0 2rem;
  line-height: 0.8;
`

const Logo = styled.div`
  font-family: ${({ theme }) => theme.font.family.heading};
  font-size: ${({ theme }) => theme.font.size.massive};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.background};
  padding: 2rem 2rem 0;
`

const Heading = styled.div`
  font-family: ${({ theme }) => theme.font.family.heading};
  font-size: ${({ theme }) => theme.font.size.massive};
  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.yellow};
  text-transform: uppercase;
  text-shadow: 0 -0.1em black;
  padding: 2rem 4rem 0 2rem;
  flex-grow: 1;
`

export default Header
