import React from "react"
const Dashboard = React.lazy(() => import("../pages/DashBorad/Dashboard"))
const Users = React.lazy(() => import("../pages/Users/Users"))
const RegisData = React.lazy(() => import("../data/RegData/RegisData"))
const AuthPage = React.lazy(() => import("./../pages/AuthPage/AuthPage"))
const TodoApp = React.lazy(() => import("../pages/Todos/todos"))
const DataVizPage = React.lazy(() => import("../pages/Recharts/Recharts"))
const WelcomePage = React.lazy(() => import("../pages/WelcomePage/Welcome"))

const routes = [
  {
    path: "/",
    label: "Welcome!!",
    element: <WelcomePage />,
    exact: true,
    protected: false,
  },
  {
    path: "/dashboard",
    label: "Dashboard",
    element: <Dashboard />,
    protected: false,
  },
  {
    path: "/users",
    label: "Users",
    element: <Users />,
    protected: true,
  },
  {
    path: "/todos",
    label: "Todos",
    element: <TodoApp />,
    protected: false,
  },
  {
    path: "/authpage",
    label: "AuthPage",
    element: <AuthPage />,
    protected: false,
  },
  {
    path: "/data",
    label: "Data",
    element: <RegisData />,
    protected: false,
  },
  {
    path: "/shows",
    label: "Charts",
    element: <DataVizPage />,
    protected: false,
  },
  {
    path: "*",
    label: "Not Found",
    element: <h1>Not Found</h1>,
    protected: false,
  },
]

export default routes
