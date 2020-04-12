import { NextPage } from 'next'
import styled from 'styled-components'
import slugify from 'slugify'
import Link from 'next/link'

import Layout from '../../components/global/Layout'
import useTv from '../../hooks/useTv'

const TV: NextPage = () => {
  const [listings] = useTv()

  return <Layout title='Television'>asd</Layout>
}

export default TV
