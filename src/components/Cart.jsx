import { useDispatch, useSelector } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  applyCoupon,
  clearCart
} from "../features/cart/cartSlice";
import { useState } from "react";
import "../styles/cart.css";

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const discount = useSelector(state => state.cart.discount);
  const [code, setCode] = useState("");

  const subtotal = items.reduce(
    (s, i) => s + i.price * i.qty,
    0
  );

  const discountAmount = subtotal * (discount / 100);
  const finalPrice = subtotal - discountAmount;

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

            <b>₹{i.price * i.qty}</b>
          </div>
        </div>
      ))}

      <div className="coupon">
        <input
          placeholder="Enter coupon (SAVE10 / SAVE20)"
          value={code}
          onChange={e => setCode(e.target.value)}
        />
        <button onClick={() => dispatch(applyCoupon(code))}>
          Apply
        </button>
      </div>

      <hr />

      <p>Subtotal: ₹{subtotal}</p>
      <p>Discount: −₹{discountAmount}</p>
      <h2>Total: ₹{finalPrice.toFixed(2)}</h2>

      <button className="checkout" onClick={() => dispatch(clearCart())}>
        Checkout
      </button>
    </div>
  );
}
