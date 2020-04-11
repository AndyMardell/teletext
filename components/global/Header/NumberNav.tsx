import { FunctionComponent, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Context from '../../../context'
import { all as contentsAll } from '../Contents/items'

const NumberNav: FunctionComponent = () => {
  const router = useRouter()
  const { context, setContext } = useContext(Context)
  const [tempNumbers, setTempNumbers] = useState<string[]>([])

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
  }, [tempNumbers])

  useEffect(() => {
    if (tempNumbers.length === 3) {
      const navNumber = tempNumbers.join('')
      const navItem = contentsAll[navNumber]

      if (navItem && navItem.link) {
        setContext({ number: navNumber })
        router.push(navItem.link)
      }
    }
  }, [tempNumbers])

  return (
    <>
      <div>P{tempNumbers.length ? tempNumbers.join('') : context.number}</div>
    </>
  )
}

export default NumberNav
