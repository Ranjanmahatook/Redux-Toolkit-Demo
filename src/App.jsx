import { Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
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
        <Link className="cart-btn" to="/cart">
          Cart ({count})
        </Link>
      </header>

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}
