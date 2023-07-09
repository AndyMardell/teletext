import { HTMLAttributes } from 'react'
import Header from '@/components/global/Header'
import styled from 'styled-components'
import { GlobalStyle } from '@/styles'

interface Props extends HTMLAttributes<HTMLDivElement> {
  title?: string
  color?: string
}

export default function Layout({ children, title, color }: Props) {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header
        title={title}
        color={color}
      />
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 1050px;
  margin: 0 auto;
  padding: 0.5rem;
`
