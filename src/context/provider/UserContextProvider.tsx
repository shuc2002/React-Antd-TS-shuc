import React, { useState } from "react"
import { UserContext } from "../context/UserContext"

const UserContextProvider = ({ children }: { children?: React.ReactNode }) => {
  const initialUser = {
    username: "admin",
    email: "1070229415@qq.com",
    password: "123123",
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [users, setUsers] = useState<(typeof initialUser)[]>([initialUser])

  return (
    <UserContext.Provider
      value={{ users, setUsers, isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
