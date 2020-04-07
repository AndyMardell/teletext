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
  max-width: 900px;
  margin: 0 auto;
`

export default Layout
