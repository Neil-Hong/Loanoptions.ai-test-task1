import { configureStore } from "@reduxjs/toolkit";
import fetchDataSlice from "./fetchDataSlice";

export const store = configureStore({
    reducer: { list: fetchDataSlice },
});
