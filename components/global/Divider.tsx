import { FunctionComponent } from 'react'
import styled from 'styled-components'

interface Props {
  color?: string
}

const Divider: FunctionComponent<Props> = ({ color }) => (
  <StlyedDivider color={color} />
)

const StlyedDivider = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme, color }) => theme.colors[color || 'yellow']};
  margin: 1rem 0;
`

export default Divider
