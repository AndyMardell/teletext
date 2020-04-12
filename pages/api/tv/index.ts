import { NextApiRequest, NextApiResponse } from 'next'
import xml2js from 'xml2js'
import Axios from 'axios'

const TVListings = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const tvRes = await Axios(`${process.env.TV_API}/9437`)
    const xml = await tvRes.data
    const { tv } = await xml2js.parseStringPromise(xml)
    res.status(200).json(tv)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default TVListings
