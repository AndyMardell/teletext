import { HTMLAttributes } from 'react'
import styled from 'styled-components'

interface Props extends HTMLAttributes<HTMLDivElement> {
  background?: string
  color?: string
}

export default function Highlight({ children, background, color }: Props) {
  return (
    <Banner
      background={background}
      color={color}
    >
      {children}
    </Banner>
  )
}

const Banner = styled.div<Props>`
  background: ${({ theme, background }) => theme.colors[background || 'blue']};
  color: ${({ theme, color }) => theme.colors[color || 'yellow']};
  padding: 0.1em;
  text-align: center;
`
