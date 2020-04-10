import { FunctionComponent } from 'react'
import styled from 'styled-components'

interface Props {
  background?: string
  color?: string
}

const Highlight: FunctionComponent<Props> = ({
  children,
  background,
  color
}) => (
  <Banner background={background} color={color}>
    {children}
  </Banner>
)

const Banner = styled.div<Props>`
  background: ${({ theme, background }) => theme.colors[background || 'blue']};
  color: ${({ theme, color }) => theme.colors[color || 'yellow']};
  padding: 0.1em;
  text-align: center;
`

export default Highlight
