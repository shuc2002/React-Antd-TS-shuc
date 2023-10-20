import React, { useState } from "react"
import { Tabs } from "antd"
import RegisterPage from "../Register/RegisterPage"
import LoginPage from "../Login/LoginPage"

const AuthPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("login")

  const handleSwitchToLogin = () => {
    setActiveTab("login")
  }

  const tabItems = [
    {
      key: "login",
      label: "Login",
      children: <LoginPage />,
    },
    {
      key: "register",
      label: "Register",
      children: <RegisterPage switchToLogin={handleSwitchToLogin} />,
    },
  ]

  return (
    <div style={{ width: "300px", margin: "0 auto", marginTop: "100px" }}>
      <Tabs activeKey={activeTab} onChange={setActiveTab} items={tabItems} />
    </div>
  )
}

export default AuthPage
