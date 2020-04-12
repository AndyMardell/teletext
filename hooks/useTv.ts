import { useEffect, useState } from 'react'
import Axios from 'axios'

const useTv = () => {
  const [listings, setListings] = useState([])

  const getListings = async () => {
    try {
      const res = await Axios('/api/tv')
      const listingsData = await res.data

      console.table(listingsData.channel)
      console.table(listingsData.programme)

      setListings(listingsData)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getListings()
  }, [])

  return [listings]
}

export default useTv
