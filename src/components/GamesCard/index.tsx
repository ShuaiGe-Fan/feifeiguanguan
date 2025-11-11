import { Link } from 'react-router-dom'
import './GamesCard.less'

/**
 * 小游戏卡片组件
 */
export default function GamesCard() {
  return (
    <div className="card games-card">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800 m-0">小游戏</h3>
        <button className="settings-btn">⚙️</button>
      </div>
      <div className="flex justify-center">
        <Link to="/what-to-eat" className="game-btn game-btn-yellow">
          <span className="game-icon">🍽️</span>
          <span>吃什么</span>
        </Link>
      </div>
    </div>
  )
}

