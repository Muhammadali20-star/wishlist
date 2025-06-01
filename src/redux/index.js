import { configureStore } from '@reduxjs/toolkit'
import wishlist from "./features/wishlist.slice"

export const store = configureStore({
  reducer: {
    wishlist,
  },
})