import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import PrivateRouter from "./PrivateRouter";
import Details from "../pages/details/Details";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />

        <Route path="/home" element={<PrivateRouter />}>
          <Route path="" element={<Home />} />
        </Route>

        <Route path="/details" element={<Details/>} />
      </Routes>
    </>
  );
};

export default AppRouter;
