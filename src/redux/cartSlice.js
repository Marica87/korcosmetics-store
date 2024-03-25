import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: []
    },

    reducers: {
        addItemToCart: (state, action) => {
                 
            const findProduct = state.cartItems.find((item) => item.id === action.payload.beaty.id); 
              if (findProduct) {
                
                 findProduct.quantity += 1;
                
              } else {
                state.cartItems.push({ ...action.payload.beaty, quantity: action.payload.quantity });
               
              }
            
            
        },

        
        
        removeItemFromCart:(state, action) => {
            state.cartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.cartItemId )
        },

        incrementQuantity(state, action) {
            const incr = state.cartItems.find((item) => item.id === action.payload.cartItem); 
            if(incr.quantity >= 1) {
                incr.quantity ++;
            }
          },
      
          decrementQuantity(state, action) {
            const decr= state.cartItems.find((item) => item.id === action.payload.cartItem); 
            
            if (decr.quantity === 1) {
                decr.quantity = 1;
            } else {
                decr.quantity--;
            }
          },
        
    }

    
})

export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItems) => {
     return total += cartItems.price * cartItems.quantity 
     
}, 0)
}

export const getCartItems = state => state.cart.cartItems;
export const {addItemToCart, removeItemFromCart, decrementQuantity, incrementQuantity } = cartSlice.actions;

export default cartSlice.reducer