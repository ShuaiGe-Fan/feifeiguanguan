import { Outlet } from 'react-router-dom'
import BottomNav from './components/BottomNav'
import './Layout.less'

/**
 * 布局组件 - 包含底部导航栏
 */
export default function Layout() {
  return (
    <div className="layout">
      <Outlet />
      <BottomNav />
    </div>
  )
}

