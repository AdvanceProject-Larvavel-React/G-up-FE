import { Outlet } from "react-router-dom"
import "../styles/style.css"
export const AuthLayout = () => {
  return (<>
    <div className="auth-layout">
      <Outlet/>
    </div>
    </>
  )
}
