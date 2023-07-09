import { createContext, useReducer, ReactNode } from 'react'

export interface ContextInterface {
  number: string
}

const defaultContext: ContextInterface = {
  number: '100'
}

export interface ContextProps {
  context: ContextInterface
  setContext: ({ number }: ContextInterface) => void
}

const Context = createContext({} as ContextProps)

function ContextProvider({ children }: { children: ReactNode }) {
  const [context, setContext] = useReducer(
    (context: ContextInterface, newContext: ContextInterface) => ({
      ...context,
      ...newContext
    }),
    defaultContext
  )

  return (
    <Context.Provider value={{ context, setContext }}>
      {children}
    </Context.Provider>
  )
}

export { Context as default, ContextProvider }
