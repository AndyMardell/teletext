import TableRow from './TableRow'
import styled from 'styled-components'
import moment from 'moment'

export interface Standing {
  rank: number
  team_id: number
  teamName: string
  logo: string
  group: string
  forme: string
  status: string
  description: string
  all: {
    matchsPlayed: number
    win: number
    draw: number
    lose: number
    goalsFor: number
    goalsAgainst: number
  }
  home: {
    matchsPlayed: number
    win: number
    draw: number
    lose: number
    goalsFor: number
    goalsAgainst: number
  }
  away: {
    matchsPlayed: number
    win: number
    draw: number
    lose: number
    goalsFor: number
    goalsAgainst: number
  }
  goalsDiff: number
  points: number
  lastUpdate: string
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
