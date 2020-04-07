import { FunctionComponent } from 'react'
import moment from 'moment'
import styled from 'styled-components'

const Topbar: FunctionComponent = () => {
  return (
    <Bar>
      <div>P100</div>
      <div>CEEFAX</div>
      <div>1</div>
      <div>302</div>
      <div>{moment().format('ddd')}</div>
      <div>{moment().format('DD')}</div>
      <div>{moment().format('MMM')}</div>
      <Date>{moment().format('HH:mm/ss')}</Date>
    </Bar>
  )
}

const Bar = styled.div`
  display: flex;
  justify-content: flex-end;

  & > div {
    margin: 0 1rem;
  }
`

const Date = styled.div`
  color: ${({ theme }) => theme.colors.yellow};
`

export default Topbar
