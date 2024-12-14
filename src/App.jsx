import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import Footer from "./components/footer";

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="bg-slate-900">
        <Navbar />
      </div>

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      {/* Uncomment this line to add the Footer later */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
