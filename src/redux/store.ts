import { configureStore } from "@reduxjs/toolkit";
import { categoryApi } from "../service/categoryApi";
export const store = configureStore({
  reducer: {
    [categoryApi.reducerPath]: categoryApi.reducer, // thêm API vào reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoryApi.middleware), // dùng middleware của API
});
