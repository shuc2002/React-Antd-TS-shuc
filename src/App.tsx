import React from "react"
import { ConfigProvider } from "antd"
import MainLayout from "./components/MainLayout/MainLayout"
import { BrowserRouter as Router } from "react-router-dom"
import UserContextProvider from "./context/provider/UserContextProvider"
import { Provider } from "react-redux"
import store from "./store/store"

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: { colorPrimary: "#1DA57A" },
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
        <UserContextProvider>
          <Router>
            <MainLayout />
          </Router>
        </UserContextProvider>
      </ConfigProvider>
    </Provider>
  )
}

export default App
