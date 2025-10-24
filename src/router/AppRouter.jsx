import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import PrivateRouter from "./PrivateRouter";
import Details from "../pages/details/Details";
import NotFound from "../pages/errorPage/NotFound";
import Navbar from "../components/navbar/Navbar";

const AppRouter = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/about" element={<About />} />

        <Route path="/home" element={<PrivateRouter />}>
          <Route path="" element={<Home/>} />
        </Route>

        <Route path="/details" element={<Details/>} />


        <Route path="*" element={<NotFound/>} />     
         </Routes>
    </>
  );
};

export default AppRouter;
