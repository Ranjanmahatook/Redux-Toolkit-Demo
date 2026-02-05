import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

export default function Checkout() {
  const dispatch = useDispatch();

  return (
    <button
      style={{ margin: "15px" }}
      onClick={() => {
        alert("Payment successful!");
        dispatch(clearCart());
      }}
    >
      Checkout
    </button>
  );
}
