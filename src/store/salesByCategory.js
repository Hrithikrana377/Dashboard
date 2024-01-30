import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { StatusCode } from "../StatusCode";

const initialState = {
  data: [],
  status: StatusCode.IDLE,
};

const salesByCategory = createSlice({
  name: "ByCategory",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(getsalesByCategory.pending, (state, action) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(getsalesByCategory.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = StatusCode.IDLE;
      })
      .addCase(getsalesByCategory.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
      });
  },
});

export default salesByCategory.reducer;

export const getsalesByCategory = createAsyncThunk(
  "salesBySubCategory/get",
  async (request) => {
    const result = await axios.post(
      "http://localhost:4200/SalesByCategory",
      request
    );
    return result.data;
  }
);
