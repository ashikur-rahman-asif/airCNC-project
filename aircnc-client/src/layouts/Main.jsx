import { Outlet } from "react-router-dom"
import NavBar from "../components/Shared/NavBar/NavBar"
import Footer from "../components/Shared/Footer/Footer"

const Main = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-28 pb-20">
        <Outlet />
        <Footer/>
      </div>
    </div>
  )
}

export default Main
