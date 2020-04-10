import { FunctionComponent } from 'react'
import TableRow from './TableRow'
import styled from 'styled-components'

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

const LeagueTable: FunctionComponent<Props> = ({ standings }) => (
  <Table>
    {standings.map((standing: Standing, i) => (
      <TableRow key={i} data={standing} />
    ))}
  </Table>
)

const Table = styled.div`
  margin: 1.5rem 0;
`

export default LeagueTable
