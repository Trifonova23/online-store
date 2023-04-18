import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  productInCart: [], //add product in object,
};

export const counterSlice = createSlice({
  name: "myCart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      // action.payload is the data which is sent by the method
      let isInStorage = false;

      for (let i = 0; i < state.productInCart.length; i++) {
        if (state.productInCart[i].id === action.payload.id) {
          isInStorage = true;
          break;
        }
      }
      if (isInStorage === false) {
        // state.productInCart.push(action.payload);
        state.productInCart = [...state.productInCart, action.payload];
      }
    },

    deleteSingleProduct: (state, action) => {
      const productId = action.payload;
      // Filter the data and return array only with results which match the condition below
      state.productInCart = state.productInCart.filter(
        (item) => item.id !== productId
      );
    },

    deleteAllProduct: (state, action) => {
      console.log("delete all product", action);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, deleteSingleProduct, deleteAllProduct } =
  counterSlice.actions;

export default counterSlice.reducer;
