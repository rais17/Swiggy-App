import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
  },
  reducers: {
    addItem: (state, action) => {

      const itemIdToAdd = action.payload.id;
      const isPresent = state.item.some(
        (itemObj) => itemObj.id === itemIdToAdd,
      );

      !isPresent && state.item.push(action.payload);
      },
      
    incrementItem: (state, action) => {

      const itemIdToIncrement = action.payload;
      const itemToIncrement = state.item.find(
        (itemObj) => itemObj.id === itemIdToIncrement,
      );

      if (itemToIncrement) {
        // Create a new item object with updated quantity and price
        const updatedItem = {
          ...itemToIncrement,
          quantity: itemToIncrement.quantity + 1,
          incrementedPrice:
            (itemToIncrement.quantity + 1) * itemToIncrement.price,
        };

        // Find the index of the item to replace in the array
        const itemIndex = state.item.findIndex(
          (itemObj) => itemObj.id === itemIdToIncrement,
        );

        // Create a new array with the updated item
        state.item.splice(itemIndex, 1, updatedItem);
      }
    },

    decrementItem: (state, action) => {
        
         const itemIdToDecrement = action.payload;
         const itemToDecrement = state.item.find(
           (itemObj) => itemObj.id === itemIdToDecrement,
         );

            if (itemToDecrement.quantity != 1 && itemToDecrement) {
              // Create a new item object with updated quantity and price
              const updatedItem = {
                ...itemToDecrement,
                quantity: itemToDecrement.quantity - 1,
                incrementedPrice:
                  (itemToDecrement.quantity - 1) * itemToDecrement.price,
              };

              // Find the index of the item to replace in the array
              const itemIndex = state.item.findIndex(
                (itemObj) => itemObj.id === itemIdToDecrement,
              );

              // Create a new array with the updated item
              state.item.splice(itemIndex, 1, updatedItem);
            }
      },
      
      clearCart: (state) => {
          state.item = []
      }
  },
});

export const { addItem, incrementItem, decrementItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;