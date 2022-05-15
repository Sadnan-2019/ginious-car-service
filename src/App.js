// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import About from "./Pages/About/About";
import AddService from "./Pages/AddService/AddService";
import Checkout from "./Pages/Checkout/Checkout/Checkout";
import Error from "./Pages/Error/Error";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import ManageService from "./Pages/ManageService/ManageService";
import Order from "./Pages/Order/Order";
import ServicesDetails from "./Pages/ServicesDetails/ServicesDetails";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import RequireAuth from "./RequireAuth/RequireAuth";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/"   element={<RequireAuth><Home /></RequireAuth>}></Route>
        <Route path="/home"   element={<Home />}></Route>
        <Route path="/register"   element={<Register />}></Route>
        <Route path="/checkout/:serviceId" element={<RequireAuth>
          <Checkout></Checkout>
        </RequireAuth>}></Route>
        <Route path="/addservice" element={<RequireAuth>
          <AddService></AddService>
        </RequireAuth>}></Route>

        <Route path="/manage" element={<RequireAuth>
           <ManageService></ManageService>
        </RequireAuth>}></Route>
        <Route path="/order" element={<RequireAuth>
          <Order></Order>
        </RequireAuth>}></Route>

        <Route path="/login"   element={<Login />}></Route>
        <Route path="/service/:serviceId" element={<ServicesDetails/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<Error/>}></Route>
      </Routes>
      <Footer />
      <ToastContainer />

    </div>
  );
}

export default App;
