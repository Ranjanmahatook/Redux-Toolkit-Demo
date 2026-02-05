import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    discount: 0
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find(i => i.id === action.payload.id);

      if (item) {
        if (item.qty < 10) item.qty += 1;   // stock limit demo
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }
    },

    increaseQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.qty < 10) item.qty += 1;
    },

    decreaseQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item.qty === 1) {
        state.items = state.items.filter(i => i.id !== action.payload);
      } else {
        item.qty -= 1;
      }
    },

    applyCoupon: (state, action) => {
      if (action.payload === "SAVE10") {
        state.discount = 10;
      } else if (action.payload === "SAVE20") {
        state.discount = 20;
      } else {
        state.discount = 0;
      }
    },

    clearCart: state => {
      state.items = [];
      state.discount = 0;
    }
  }
});

export const {
  addToCart,
  increaseQty,
  decreaseQty,
  applyCoupon,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
