import { Link } from 'react-router-dom'
import './TopActions.less'

/**
 * 顶部功能按钮组件
 */
export default function TopActions() {
  return (
    <div className="top-actions-wrapper">
      <div className="grid grid-cols-4 gap-3">
        <Link to="/kitten" className="action-btn action-btn-pink">
          <div className="action-icon">🐱</div>
          <span>养猫咪</span>
        </Link>
        <Link to="/diary" className="action-btn action-btn-purple">
          <div className="action-icon">📝</div>
          <span>写日记</span>
        </Link>
        <Link to="/status" className="action-btn action-btn-blue">
          <div className="action-icon">💬</div>
          <span>说说</span>
        </Link>
        <Link to="/games" className="action-btn action-btn-green">
          <div className="action-icon">🎮</div>
          <span>小游戏</span>
        </Link>
      </div>
    </div>
  )
}

