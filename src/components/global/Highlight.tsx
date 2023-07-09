import { HTMLAttributes } from 'react'
import styled from 'styled-components'

interface Props extends HTMLAttributes<HTMLDivElement> {
  background?: string
  color?: string
  mb?: boolean
}

export default function Highlight({ children, background, color, style, mb }: Props) {
  return (
    <Banner
      background={background}
      color={color}
      style={style}
      mb={mb}
    >
      {children}
    </Banner>
  )
}

const Banner = styled.div<Props>`
  background: ${({ theme, background }) => theme.colors[background || 'blue']};
  color: ${({ theme, color }) => theme.colors[color || 'yellow']};
  padding: 0em;
  font-size: 1.2em;
  line-height: 1;
  text-align: center;
  ${({ mb }) => mb && 'margin-bottom: 3rem;'}
`
