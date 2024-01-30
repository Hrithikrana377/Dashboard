import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { StatusCode } from "../StatusCode";

const initialState = {
  data: [],
  status: StatusCode.IDLE,
};

const salesBySubCategory = createSlice({
  name: "BySubCategory",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(getsalesBySubCategory.pending, (state, action) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(getsalesBySubCategory.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = StatusCode.IDLE;
      })
      .addCase(getsalesBySubCategory.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
      });
  },
});

export default salesBySubCategory.reducer;

export const getsalesBySubCategory = createAsyncThunk(
  "salesBySubCategory/get",
  async (request) => {
    const result = await axios.post(
      "http://localhost:4200/SalesBySubCategory",
      request
    );
    return result.data;
  }
);
