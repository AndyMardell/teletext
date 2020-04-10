import { FunctionComponent } from 'react'
import Header from '../Header'
import styled from 'styled-components'
import { GlobalStyle } from '../../../style'

const Layout: FunctionComponent = ({ children }) => (
  <Wrapper>
    <GlobalStyle />
    <Header />
    {children}
  </Wrapper>
)

const Wrapper = styled.div`
  max-width: 1050px;
  margin: 0 auto;
  padding: 0.5rem;
`

export default Layout
