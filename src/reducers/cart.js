import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productInCart: [], //add product in object
};

export const counterSlice = createSlice({
  name: "myCart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      // action.payload is the data which is sent by the method
      let isInStorage = false;
      console.log("add", state.productInCart);
      for (let i = 0; i < state.productInCart.length; i++) {
        if (state.productInCart[i].id === action.payload.id) {
          isInStorage = true;
          break;
        }
      }
      if (isInStorage === false) {
        state.productInCart.push(action.payload);
      }
    },

    deleteSingleProduct: (state, action) => {
      const productId = action.payload;

      const index = state.productInCart.findIndex(
        (item) => item.id === productId
      );
      if (index !== -1) {
        return state.productInCart.splice(index, 1); // This is also handled by immer
      }
      console.log("index", index);
      // state.productInCart.map((singleProduct) => {
      //   if (productId !== singleProduct.id) {
      //     leftProducts.push(singleProduct);
      //   }
      // });
      // console.log(leftProducts, "test left products");
      // state.productInCart = state.productInCart.filter(
      //   (product) => product.id !== productId
      // );
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
