import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/pages/Cart";
import Login from "./components/pages/Login";
import Product from "./components/pages/Product";
import ProductList from "./components/pages/ProductList";
import Register from "./components/pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
