import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { StatusCode } from "../StatusCode";

const initialState = {
  data: [],
  status: StatusCode.IDLE,
};

const salesByProduct = createSlice({
  name: "ByProduct",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(getsalesByProduct.pending, (state, action) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(getsalesByProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = StatusCode.IDLE;
      })
      .addCase(getsalesByProduct.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
      });
  },
});

export default salesByProduct.reducer;

export const getsalesByProduct = createAsyncThunk(
  "salesByProduct/get",
  async (request) => {
    const result = await axios.post(
      "https://dashboard-api-ocib.onrender.com/SalesByProducts",
      request
    );
    return result.data;
  }
);
