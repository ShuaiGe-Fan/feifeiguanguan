import './AnniversaryCard.less'

interface Anniversary {
  id: string
  icon: string
  title: string
  days: number
}

interface AnniversaryCardProps {
  anniversaries?: Anniversary[]
}

/**
 * 纪念日卡片组件
 */
export default function AnniversaryCard({ 
  anniversaries = [
    { id: '1', icon: '❤️', title: '第一次约会', days: 15 },
    { id: '2', icon: '🎁', title: '小明生日', days: 45 }
  ]
}: AnniversaryCardProps) {
  return (
    <div className="card anniversary-card">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800 m-0">纪念日</h3>
        <button className="info-btn">ℹ️</button>
      </div>
      <div className="flex flex-col gap-4">
        {anniversaries.map((anniversary) => (
          <div key={anniversary.id} className="anniversary-item">
            <span className="anniversary-icon">{anniversary.icon}</span>
            <div className="flex-1">
              <div className="anniversary-title">{anniversary.title}</div>
              <div className="anniversary-days">还有{anniversary.days}天</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

