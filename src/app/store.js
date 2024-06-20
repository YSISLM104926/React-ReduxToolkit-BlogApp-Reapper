import { configureStore } from "@reduxjs/toolkit";
import blogsSlice from "../features/BlogsSlice";

export const store = configureStore({
    reducer: {
        blogsRe : blogsSlice
    }
})
