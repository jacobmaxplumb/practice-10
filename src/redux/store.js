import { configureStore } from "@reduxjs/toolkit";
import { contactFormSlice } from "./contactFormSlice";
import { contactApi } from "./contactApi";

export const store = configureStore({
  reducer: {
    [contactFormSlice.name]: contactFormSlice.reducer,
    [contactApi.reducerPath]: contactApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactApi.middleware),
});
