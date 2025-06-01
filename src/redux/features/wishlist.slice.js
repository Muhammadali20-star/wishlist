import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: [],
  reducers: {
    addToWishlist: (state, action) => {
        const exists = state.find(item => item.id === action.payload.id);
        if (!exists) {
            return [...state, action.payload];
        }
        return state
      },
    removeFromWishlist: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    }
  }
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
