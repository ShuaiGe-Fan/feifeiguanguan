import { NavLink } from 'react-router-dom'
import './BottomNav.less'

/**
 * 底部导航栏组件
 */
export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink 
        to="/"
        className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
      >
        <span className="nav-icon">🏠</span>
        <span className="nav-label">首页</span>
      </NavLink>
      <NavLink 
        to="/memories"
        className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
      >
        <span className="nav-icon">💕</span>
        <span className="nav-label">回忆</span>
      </NavLink>
      <NavLink 
        to="/publish"
        className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
      >
        <span className="nav-icon nav-icon-plus">➕</span>
        <span className="nav-label">发布</span>
      </NavLink>
      <NavLink 
        to="/chat"
        className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
      >
        <span className="nav-icon">💬</span>
        <span className="nav-label">聊天</span>
      </NavLink>
      <NavLink 
        to="/profile"
        className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
      >
        <span className="nav-icon">👤</span>
        <span className="nav-label">我的</span>
      </NavLink>
    </nav>
  )
}

