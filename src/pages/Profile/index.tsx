import './Profile.less'

/**
 * 我的页面组件
 */
export default function Profile() {
  return (
    <div className="profile-page">
      <div className="page-header">
        <h1 className="text-2xl font-bold text-gray-800">我的</h1>
        <p className="text-gray-600 mt-2">个人中心</p>
      </div>
      <main className="page-content">
        <div className="card">
          <p className="text-center text-gray-500">个人中心功能开发中...</p>
        </div>
      </main>
    </div>
  )
}

