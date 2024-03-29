import { useState, useEffect, useContext } from 'react'
import moment from 'moment'
import styled from 'styled-components'

import Context from '@/context'
import NumberNav from '@/components/global/Header/NumberNav'

export default function Topbar() {
  const { context } = useContext(Context)
  const [time, setTime] = useState(moment())

  useEffect(() => {
    const updateTime = setInterval(() => setTime(moment()), 1000)
    return () => clearInterval(updateTime)
  }, [])

  return (
    <Bar>
      <NumberNav />
      <div>CEEFAX</div>
      <div>1</div>
      <div>{context.number}</div>
      <div>{time.format('ddd')}</div>
      <div>{time.format('DD')}</div>
      <div>{time.format('MMM')}</div>
      <Date>{time.format('HH:mm/ss')}</Date>
    </Bar>
  )
}

const Bar = styled.div`
  display: flex;
  justify-content: flex-end;
  font-weight: 700;

  & > div {
    margin: 0 1rem;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`

const Date = styled.div`
  color: ${({ theme }) => theme.colors.yellow};
`
