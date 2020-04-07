import { FunctionComponent } from 'react'
import Topbar from './Topbar'

const Header: FunctionComponent = () => {
  return (
    <div>
      <Topbar />
      <div>
        <div>Logo</div>
        <div>TITLE</div>
      </div>
    </div>
  )
}

export default Header
