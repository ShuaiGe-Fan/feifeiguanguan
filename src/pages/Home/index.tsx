import KittenCard from '../../components/KittenCard'
import AnniversaryCard from '../../components/AnniversaryCard'
import FeedCard from '../../components/FeedCard'
import GamesCard from '../../components/GamesCard'
import TopActions from '../../components/TopActions'
import './Home.less'

/**
 * 首页组件
 */
export default function Home() {
  return (
    <div className="home-page">
      <TopActions />
      <main className="flex-1 px-4 py-5 flex flex-col gap-5">
        <KittenCard />
        <AnniversaryCard />
        <FeedCard />
        <GamesCard />
      </main>
    </div>
  )
}

