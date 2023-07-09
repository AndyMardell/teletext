import { Standing } from '@/components/sport/LeagueTable'

interface Props {
  data: Standing
}

export default function TableRow({ data }: Props) {
  return (
    <tr>
      <td>{data.rank}</td>
      <td>{data.team.name}</td>
      <td>{data.all.played}</td>
      <td>{data.all.win}</td>
      <td>{data.all.draw}</td>
      <td>{data.all.lose}</td>
      <td>{data.all.goals.for}</td>
      <td>{data.all.goals.against}</td>
      <td>{data.points}</td>
    </tr>
  )
}
