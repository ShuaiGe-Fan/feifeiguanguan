import './FeedCard.less'

interface FeedItem {
  id: string
  avatar: string
  author: string
  type: 'diary' | 'status'
  content: string
  time: string
}

interface FeedCardProps {
  feeds?: FeedItem[]
}

/**
 * 动态卡片组件
 */
export default function FeedCard({
  feeds = [
    {
      id: '1',
      avatar: '👩',
      author: '小雨',
      type: 'diary',
      content: '今天和小明一起看了电影...',
      time: '2小时前'
    },
    {
      id: '2',
      avatar: '👨',
      author: '小明',
      type: 'status',
      content: '和小雨一起的每一天都很开心 💕',
      time: '5小时前'
    }
  ]
}: FeedCardProps) {
  const getTypeText = (type: string) => {
    return type === 'diary' ? '写了一篇日记' : '发布了说说'
  }

  // 过滤掉说说类型的动态
  const filteredFeeds = feeds.filter(feed => feed.type !== 'status')

  return (
    <div className="card feed-card">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800 m-0">最近动态</h3>
        <button className="view-more-btn">查看更多</button>
      </div>
      <div className="flex flex-col gap-4">
        {filteredFeeds.map((feed) => (
          <div key={feed.id} className="feed-item">
            <div className="feed-avatar">{feed.avatar}</div>
            <div className="flex-1">
              <div className="feed-text">
                <span className="feed-author">{feed.author}</span>
                <span> {getTypeText(feed.type)}</span>
              </div>
              <div className="feed-preview">{feed.content}</div>
              <div className="feed-time">{feed.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
