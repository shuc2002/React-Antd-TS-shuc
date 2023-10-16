// UserContextProvider.tsx
import React, { useState } from "react"
import { UserContext } from "../context/UserContext"

const UserContextProvider = ({ children }: { children?: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [users, setUsers] = useState<
    {
      username: string
      email: string
      password: string
    }[]
  >([])

  return (
    <UserContext.Provider
      value={{ users, setUsers, isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
