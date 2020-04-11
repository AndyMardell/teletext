import { FunctionComponent } from 'react'
import { Standing } from './LeagueTable'
import styled from 'styled-components'
import { stat } from 'fs'

interface Props {
  data: Standing
}

const TableRow: FunctionComponent<Props> = ({ data }) => {
  return (
    <Row>
      <td>{data.rank}</td>
      <td>{data.teamName}</td>
      <td>{data.all.matchsPlayed}</td>
      <td>{data.all.win}</td>
      <td>{data.all.draw}</td>
      <td>{data.all.lose}</td>
      <td>{data.all.goalsFor}</td>
      <td>{data.all.goalsAgainst}</td>
      <td>{data.points}</td>
    </Row>
  )
}

const Row = styled.tr``

export default TableRow
