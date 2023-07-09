import { Standing } from '../LeagueTable'

interface Props {
  data: Standing
}

export default function TableRow({ data }: Props) {
  return (
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
}
