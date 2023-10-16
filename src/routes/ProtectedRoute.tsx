// ProtectedRoute.tsx
import { useContext } from "react"
import { UserContext } from "../context/context/UserContext"
import { Navigate } from "react-router-dom"

interface ProtectedRouteProps {
  children: React.ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isLoggedIn } = useContext(UserContext)

  if (isLoggedIn) {
    return <>{children}</>
  } else {
    return <Navigate to='/authpage' />
  }
}

export default ProtectedRoute
