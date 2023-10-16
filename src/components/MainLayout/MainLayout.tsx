import React, { useState } from "react"
import { Layout, Menu, Switch } from "antd"
import { Link } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import type { MenuTheme } from "antd/lib/menu/MenuContext"
import routes from "./../../routes/routes"
import ProtectedRoute from "../../routes/ProtectedRoute"

const { Header, Content, Footer, Sider } = Layout

const MainLayout: React.FC = () => {
  const [theme, setTheme] = useState<MenuTheme>("dark")
  const changeTheme = (value: boolean) => {
    setTheme(value ? "dark" : "light")
  }
  const menuItems = routes.map((route) => ({
    key: route.key,
    icon: null, // Add an icon if needed
    label: <Link to={route.path}>{route.label}</Link>, // Use label with a Link component
  }))

  return (
    <Layout>
      <Header style={{ color: "black", textAlign: "center" }}>
        My Admin Dashboard
      </Header>
      <Layout>
        <Sider width={200}>
          <Switch
            checked={theme === "dark"}
            onChange={changeTheme}
            checkedChildren='Dark'
            unCheckedChildren='Light'
          />
          <Menu
            mode='vertical'
            defaultSelectedKeys={["1"]}
            items={menuItems}
            theme={theme}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            style={{
              width: "100%",
              background: "#fff",
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Routes>
              {routes.map((route, index) =>
                route.protected ? (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <ProtectedRoute>
                        <route.component />
                      </ProtectedRoute>
                    }
                  />
                ) : (
                  <Route
                    key={index}
                    path={route.path}
                    element={<route.component />}
                  />
                )
              )}
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
