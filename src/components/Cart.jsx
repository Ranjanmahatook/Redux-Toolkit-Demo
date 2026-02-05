import { useDispatch, useSelector } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCart
} from "../features/cart/cartSlice";
import "../styles/cart.css";

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const totalQty = items.reduce((s, i) => s + i.qty, 0);
  const totalPrice = items.reduce(
    (s, i) => s + i.price * i.qty,
    0
  );

  if (!items.length) return <h2 className="empty">Cart is empty</h2>;

  return (
    <div className="cart">
      {items.map(i => (
        <div className="cart-row" key={i.id}>
          <img src={i.thumbnail} />

          <div className="info">
            <strong>{i.title}</strong>
            <p>₹{i.price}</p>

            <div className="qty">
              <button onClick={() => dispatch(decreaseQty(i.id))}>−</button>
              <span>{i.qty}</span>
              <button onClick={() => dispatch(increaseQty(i.id))}>+</button>
            </div>

            <b>Total: ₹{i.price * i.qty}</b>
          </div>

          <button onClick={() => dispatch(removeFromCart(i.id))}>
            Remove
          </button>
        </div>
      ))}

      <hr />

      <h3>Total Items: {totalQty}</h3>
      <h2>Total Price: ₹{totalPrice}</h2>

      <button className="checkout" onClick={() => dispatch(clearCart())}>
        Checkout
      </button>
    </div>
  );
}
