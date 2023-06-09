import { Outlet } from "react-router-dom"
import NavBar from "../components/Shared/NavBar/NavBar"

const Main = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-28 pb-20">
      <Outlet/>
      </div>
    </div>
  )
}

export default Main
