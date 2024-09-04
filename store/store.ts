"use client";

import counterReducer from "./counter-slice";
import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./slices/form-slice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    createArticle: formSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
