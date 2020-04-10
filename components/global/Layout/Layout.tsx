import { FunctionComponent } from 'react'
import Header from '../Header'
import styled from 'styled-components'

const Layout: FunctionComponent = ({ children }) => (
  <Wrapper>
    <Header />
    {children}
  </Wrapper>
)

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0.5rem;
`

export default Layout
