import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productSlice";
import { addToCart } from "../features/cart/cartSlice";
import "../styles/products.css";

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="grid">
      {products.map(p => (
        <div className="card" key={p.id}>
          <img src={p.thumbnail} />
          <h4>{p.title}</h4>
          <p>₹{p.price}</p>
          <button onClick={() => dispatch(addToCart(p))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
