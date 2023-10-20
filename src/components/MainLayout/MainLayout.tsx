import React, { useState, Suspense } from "react"
import { Layout, Menu, Switch } from "antd"
import { Link, Routes, Route } from "react-router-dom"
import type { MenuTheme } from "antd/lib/menu/MenuContext"
import routes from "./../../routes/routes"
import ProtectedRoute from "../../routes/ProtectedRoute"

const { Header, Content, Footer, Sider } = Layout
const excludedRoutes = ["*"] // Use the path for the "Not Found" route

const MainLayout: React.FC = () => {
  const [theme, setTheme] = useState<MenuTheme>("dark")
  const changeTheme = (value: boolean) => {
    setTheme(value ? "dark" : "light")
  }

  const menuItems = routes
    .filter((route) => !excludedRoutes.includes(route.path)) // Use path instead of key
    .map((route) => ({
      key: route.path, // Use path as key
      icon: null,
      label: <Link to={route.path}>{route.label}</Link>,
    }))

  return (
    <Layout>
      <Header style={{ color: "black", textAlign: "center" }}>
        My Admin Management System
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
            defaultSelectedKeys={["/"]} // Use root path as default
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
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                {routes.map((route) =>
                  route.protected ? (
                    <Route
                      key={route.path} // Use path as key
                      path={route.path}
                      element={<ProtectedRoute>{route.element}</ProtectedRoute>}
                    />
                  ) : (
                    <Route
                      key={route.path} // Use path as key
                      path={route.path}
                      element={route.element}
                    />
                  )
                )}
              </Routes>
            </Suspense>
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
