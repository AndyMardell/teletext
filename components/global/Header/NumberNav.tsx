import { FunctionComponent, useContext, useState, useEffect } from 'react'
import Context from '../../../context'

const NumberNav: FunctionComponent = () => {
  const { context } = useContext(Context)
  const [tempNumbers, setTempNumbers] = useState<string[]>(
    context.number.toString().split('')
  )

  const downHandler = ({ key }: KeyboardEvent) => {
    const allowed = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    if (allowed.includes(key)) {
      if (tempNumbers.length >= 3) {
        return setTempNumbers([key])
      }
      setTempNumbers([...tempNumbers, key])
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    return () => {
      window.removeEventListener('keydown', downHandler)
    }
  }, [])

  return (
    <>
      <div>P{tempNumbers.join('')}</div>
    </>
  )
}

export default NumberNav
