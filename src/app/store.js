import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice";
import cartReducer from "../features/cart/cartSlice";

const loadCart = () => {
  try {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer
  },
  preloadedState: {
    cart: { items: loadCart() }
  }
});

store.subscribe(() => {
  localStorage.setItem(
    "cart",
    JSON.stringify(store.getState().cart.items)
  );
});
