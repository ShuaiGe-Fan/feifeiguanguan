import './GamesCard.less'

interface Game {
  id: string
  icon: string
  name: string
  type: 'yellow' | 'green'
}

interface GamesCardProps {
  games?: Game[]
}

/**
 * 小游戏卡片组件
 */
export default function GamesCard({
  games = [
    { id: '1', icon: '🧩', name: '情侣拼图', type: 'yellow' },
    { id: '2', icon: '❓', name: '默契问答', type: 'green' }
  ]
}: GamesCardProps) {
  return (
    <div className="card games-card">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800 m-0">小游戏</h3>
        <button className="settings-btn">⚙️</button>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {games.map((game) => (
          <button 
            key={game.id} 
            className={`game-btn game-btn-${game.type}`}
          >
            <span className="text-3xl mb-2">{game.icon}</span>
            <span>{game.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

