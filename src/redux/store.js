import { configureStore } from "@reduxjs/toolkit";
import theme from "./ThemeSlice";

export const store = configureStore({
  reducer: {
    theme,
  },
});
