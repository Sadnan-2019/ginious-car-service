// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Checkout from "./Pages/Checkout/Checkout/Checkout";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import ServicesDetails from "./Pages/ServicesDetails/ServicesDetails";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import RequireAuth from "./RequireAuth/RequireAuth";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/"   element={<Home />}></Route>
        <Route path="/home"   element={<Home />}></Route>
        <Route path="/register"   element={<Register />}></Route>
        <Route path="/checkout" element={<RequireAuth>
          <Checkout></Checkout>
        </RequireAuth>}></Route>
        <Route path="/login"   element={<Login />}></Route>
        <Route path="/service/:serviceId" element={<ServicesDetails/>}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
