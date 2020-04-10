import { FunctionComponent } from 'react'
import { Standing } from './LeagueTable'
import styled from 'styled-components'

interface Props {
  data: Standing
}

const TableRow: FunctionComponent<Props> = ({ data }) => {
  return (
    <Row>
      <div>{data.teamName}</div>
    </Row>
  )
}

const Row = styled.div`
  display: flex;
`

export default TableRow
