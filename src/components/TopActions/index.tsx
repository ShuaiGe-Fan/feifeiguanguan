import { Link } from 'react-router-dom'
import './TopActions.less'

/**
 * 顶部功能按钮组件
 */
export default function TopActions() {
  return (
    <div className="grid grid-cols-4 gap-3 p-4 bg-white">
      <Link to="/kitten" className="action-btn action-btn-pink">
        <div className="text-3xl mb-2">🐱</div>
        <span className="text-sm font-medium">养猫咪</span>
      </Link>
      <Link to="/diary" className="action-btn action-btn-purple">
        <div className="text-3xl mb-2">📝</div>
        <span className="text-sm font-medium">写日记</span>
      </Link>
      <Link to="/status" className="action-btn action-btn-blue">
        <div className="text-3xl mb-2">💬</div>
        <span className="text-sm font-medium">说说</span>
      </Link>
      <Link to="/games" className="action-btn action-btn-green">
        <div className="text-3xl mb-2">🎮</div>
        <span className="text-sm font-medium">小游戏</span>
      </Link>
    </div>
  )
}

