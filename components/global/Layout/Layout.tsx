import { FunctionComponent } from 'react'
import Header from '../Header'
import styled from 'styled-components'
import { GlobalStyle } from '../../../style'

interface Props {
  title?: string
  color?: string
}

const Layout: FunctionComponent<Props> = ({ children, title, color }) => (
  <Wrapper>
    <GlobalStyle />
    <Header title={title} color={color} />
    {children}
  </Wrapper>
)

const Wrapper = styled.div`
  max-width: 1050px;
  margin: 0 auto;
  padding: 0.5rem;
`

export default Layout
