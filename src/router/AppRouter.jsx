import { Route, Routes } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import Login from "../pages/login/Login"
import PrivateRouter from "./PrivateRouter"
import Home from "../pages/home/Home"

const AppRouter = () => {
  return (

    <>
<Navbar/>
<Routes>
<Route path="/" element={<Login/>}/>

<Route path="/home" element={<PrivateRouter/>}>

<Route path="" element={<Home/>} />

</Route>
</Routes>

    </>
  )
}

export default AppRouter