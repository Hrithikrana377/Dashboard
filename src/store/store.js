import { configureStore } from "@reduxjs/toolkit";

import saleSlice from "./sales";
import salesByCategory from "./salesByCategory";
import salesByCity from "./salesByCity";
import salesByProduct from "./salesByProduct";
import salesBySegment from "./salesBySegment";
import salesBySubCategory from "./salesBySubCategory";
import states from "./states";

const store = configureStore({
  reducer: {
    sale: saleSlice,
    state: states,
    salesByCity: salesByCity,
    salesByProduct: salesByProduct,
    salesBySubCategory: salesBySubCategory,
    salesByCategory: salesByCategory,
    salesBySegment: salesBySegment,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;
