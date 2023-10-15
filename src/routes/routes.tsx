import Dashboard from "../components/DashBorad/Dashboard"
import Users from "../components/Users/Users"
import Settings from "../components/UserSettings/Settings"

const routes = [
  {
    path: "/",
    element: <Dashboard />,
    exact: true,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  // 可以继续添加更多路由
]

export default routes
