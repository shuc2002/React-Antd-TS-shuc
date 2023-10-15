import React from "react"
import { Layout, Menu } from "antd"
import { Link } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import Dashboard from "../DashBorad/Dashboard"
import Users from "../Users/Users"
import Settings from "../UserSettings/Settings"

const { Header, Content, Footer, Sider } = Layout

type RouteItem = {
  key: string
  path: string
  label: string
  component: React.ReactNode
}

const routeItems: RouteItem[] = [
  {
    key: "1",
    path: "/dashboard",
    label: "Dashboard",
    component: <Dashboard />,
  },
  { key: "2", path: "/users", label: "Users", component: <Users /> },
  { key: "3", path: "/settings", label: "Settings", component: <Settings /> },
]

const MainLayout: React.FC = () => {
  return (
    <Layout>
      <Header style={{ color: "black", textAlign: "center" }}>
        My Admin Dashboard
      </Header>
      <Layout>
        <Sider width={200}>
          <Menu mode='vertical' defaultSelectedKeys={["1"]}>
            {routeItems.map((item) => (
              <Menu.Item key={item.key}>
                <Link to={item.path}>{item.label}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            style={{
              background: "#fff",
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Routes>
              {routeItems.map((item) => (
                <Route
                  key={item.key}
                  path={item.path}
                  element={item.component}
                />
              ))}
            </Routes>
          </Content>
        </Layout>
      </Layout>
      <Footer style={{ textAlign: "center" }}>
        ©{new Date().getFullYear()} My Company
      </Footer>
    </Layout>
  )
}

export default MainLayout
