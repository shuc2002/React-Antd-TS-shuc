// context/UserContext.tsx
import { createContext, Dispatch, SetStateAction } from "react"

interface User {
  username: string
  email: string
  password: string
}

interface UserContextType {
  users: User[]
  setUsers: Dispatch<SetStateAction<User[]>>
  isLoggedIn: boolean
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>
}

const defaultContextValue: UserContextType = {
  users: [],
  setUsers: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
}

const UserContext = createContext<UserContextType>(defaultContextValue)

export { UserContext }
