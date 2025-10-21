import { Route, Routes } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import Login from "../pages/login/Login"

const AppRouter = () => {
  return (

    <>
<Navbar/>
<Routes>
<Route path="/" element={<Login/>}/>
</Routes>

    </>
  )
}

export default AppRouter