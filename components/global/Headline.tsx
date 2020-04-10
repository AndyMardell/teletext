import { FunctionComponent } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

interface Props {
  category?: string
  link?: string
  number?: number
}

const Headline: FunctionComponent<Props> = ({
  category,
  link,
  children,
  number
}) => {
  if (link) {
    return (
      <div>
        {category && <Category>{category}</Category>}
        <Heading>
          <Link href={link}>
            <a>
              <span>{children}</span> {number && <Number>{number}</Number>}
            </a>
          </Link>
        </Heading>
      </div>
    )
  }

  return (
    <div>
      {category && <Category>{category}</Category>}
      <Heading>
        <span>{children}</span> {number && <Number>{number}</Number>}
      </Heading>
    </div>
  )
}

const Category = styled.div`
  color: ${({ theme }) => theme.colors.yellow};
`

const Number = styled.span`
  color: ${({ theme }) => theme.colors.yellow};
  margin-left: 0.5em;
`

const Heading = styled.h2`
  margin-top: 0;

  a {
    display: flex;
    justify-content: space-between;
  }
`

export default Headline
