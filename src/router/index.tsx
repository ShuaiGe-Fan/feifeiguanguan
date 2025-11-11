import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Layout'
import Home from '../pages/Home'
import Memories from '../pages/Memories'
import Publish from '../pages/Publish'
import Chat from '../pages/Chat'
import Profile from '../pages/Profile'

/**
 * 路由配置
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'memories',
        element: <Memories />
      },
      {
        path: 'publish',
        element: <Publish />
      },
      {
        path: 'chat',
        element: <Chat />
      },
      {
        path: 'profile',
        element: <Profile />
      }
    ]
  }
])

export default router

