import styled from 'styled-components'

interface Props {
  color?: string
}

export default function Divider({ color }: Props) {
  return <StlyedDivider color={color} />
}

const StlyedDivider = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme, color }) => theme.colors[color || 'yellow']};
  margin: 1rem 0;
`
