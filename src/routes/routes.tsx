import Dashboard from "../components/DashBorad/Dashboard"
import Users from "../components/Users/Users"
import Settings from "../components/UserSettings/Settings"
import RegisData from "../data/RegData/RegisData"
import AuthPage from "./../pages/AuthPage/AuthPage"

const routes = [
  {
    key: "0",
    path: "/",
    component: Dashboard,
    exact: true,
    protected: false,
  },
  {
    key: "1",
    path: "/dashboard",
    label: "Dashboard",
    component: Dashboard,
    exact: true,
    protected: false,
  },
  {
    key: "2",
    path: "/users",
    label: "Users",
    component: Users,
    protected: true,
  },
  {
    key: "3",
    path: "/settings",
    label: "Settings",
    component: Settings,
    protected: false,
  },
  {
    key: "4",
    path: "/authpage",
    label: "AuthPage",
    component: AuthPage,
    protected: false,
  },
  {
    key: "5",
    path: "/data",
    label: "Data",
    component: RegisData,
    protected: false,
  },
]

export default routes
