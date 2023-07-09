import { FunctionComponent } from 'react'
import { Standing } from '../LeagueTable'

interface Props {
  data: Standing
}

const TableRow: FunctionComponent<Props> = ({ data }) => (
  <tr>
    <td>{data.rank}</td>
    <td>{data.teamName}</td>
    <td>{data.all.matchsPlayed}</td>
    <td>{data.all.win}</td>
    <td>{data.all.draw}</td>
    <td>{data.all.lose}</td>
    <td>{data.all.goalsFor}</td>
    <td>{data.all.goalsAgainst}</td>
    <td>{data.points}</td>
  </tr>
)

export default TableRow
