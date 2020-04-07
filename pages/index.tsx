import { NextPage } from 'next'
import styled from 'styled-components'

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
`

const Home: NextPage = () => <Heading>Hello world!</Heading>

export default Home
