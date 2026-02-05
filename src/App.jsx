import { Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./styles/header.css";

export default function App() {
  const count = useSelector(state =>
    state.cart.items.reduce((s, i) => s + i.qty, 0)
  );

  return (
    <>
      <header className="header">
        <h2>Wall Mart Shop</h2>

        <Link to="/cart" className="cart-icon">
          <FaShoppingCart size={22} />
          <span className="badge">{count}</span>
        </Link>
      </header>

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}
