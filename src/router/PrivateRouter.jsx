import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {


  const {username, password}=useContext(RecipeContext)
  return username === "imren" && password === "1234" ? <Outlet/> : <Navigate to="/"/>
}

export default PrivateRouter