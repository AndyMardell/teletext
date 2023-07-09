import TableRow from '@/components/sport/LeagueTable/TableRow'
import styled from 'styled-components'
import moment from 'moment'

type Team = {
  id: number
  name: string
  logo: string
}

type Goals = {
  for: number
  against: number
}

type Stats = {
  played: number
  win: number
  draw: number
  lose: number
  goals: Goals
}

export interface Standing {
  rank: number
  team: Team
  group: string
  form: string
  status: string
  description: string
  all: Stats
  home: Stats
  away: Stats
  goalsDiff: number
  points: number
  update: string
}

interface Props {
  standings: Standing[]
}

export default function LeagueTable({ standings }: Props) {
  return (
    <Table>
      <TableHeader>
        <tr>
          <td colSpan={2}>{moment().format('MMM D')}</td>
          <td>P</td>
          <td>W</td>
          <td>D</td>
          <td>L</td>
          <td>F</td>
          <td>A</td>
          <td>Pts</td>
        </tr>
      </TableHeader>
      <tbody>
        {standings.map((standing: Standing, i) => (
          <TableRow
            key={i}
            data={standing}
          />
        ))}
      </tbody>
    </Table>
  )
}

const Table = styled.table`
  width: 100%;
  margin: 1.5rem 0;

  tr:nth-child(even) {
    color: ${({ theme }) => theme.colors.lightblue};
  }

  td {
    padding-right: 1rem;

    &:last-child {
      padding-right: 0;
    }
  }
`

const TableHeader = styled.thead`
  td {
    padding-bottom: 1rem;
  }
`
