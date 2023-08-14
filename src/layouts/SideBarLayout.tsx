import { Outlet } from 'react-router-dom'
import SideMenu from '../component/SideMenu'

const SideBarLayout = () => {
  return (
    <div style={{ display: 'flex' }}>
      <SideMenu />
      <Outlet />
    </div>
  )
}

export default SideBarLayout
