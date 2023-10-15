// App.tsx
import React from "react"
import { ConfigProvider } from "antd"
import MainLayout from "./components/MainLayout/MainLayout"
import { BrowserRouter as Router } from "react-router-dom"

const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: { colorPrimary: "#1DA" },
        components: {
          Layout: {
            bodyBg: "#f5f5f5",
            headerBg: "#f5f5f5",
            footerBg: "#f5f5f5",
            siderBg: "#f5f5f5",
            headerHeight: 50,
          },
        },
      }}
    >
      <Router>
        <MainLayout />
      </Router>
    </ConfigProvider>
  )
}

export default App
