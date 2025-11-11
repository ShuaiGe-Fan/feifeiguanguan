import './KittenCard.less'

interface KittenCardProps {
  level?: number
  name?: string
  mood?: number
  water?: number
  hunger?: number
}

/**
 * 小猫咪卡片组件
 */
export default function KittenCard({ 
  level = 5, 
  name = '小橘',
  mood = 85,
  water = 70,
  hunger = 90
}: KittenCardProps) {
  return (
    <div className="card kitten-card">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800 m-0">我们的小猫咪</h3>
        <span className="level-badge">Lv.{level}</span>
      </div>
      <div className="kitten-content">
        <div className="mb-3">
          <div className="kitten-circle">🐱</div>
        </div>
        <div className="kitten-name">{name}</div>
        <div className="kitten-stats">
          <div className="stat-item">
            <span className="text-2xl">❤️</span>
            <span className="stat-value">{mood}%</span>
          </div>
          <div className="stat-item">
            <span className="text-2xl">💧</span>
            <span className="stat-value">{water}%</span>
          </div>
          <div className="stat-item">
            <span className="text-2xl">🍽️</span>
            <span className="stat-value">{hunger}%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

