import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { StatusCode } from "../StatusCode";

const initialState = {
  data: [],
  status: StatusCode.IDLE,
};

const salesBySegment = createSlice({
  name: "BySegment",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(getsalesBySegment.pending, (state, action) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(getsalesBySegment.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = StatusCode.IDLE;
      })
      .addCase(getsalesBySegment.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
      });
  },
});

export default salesBySegment.reducer;

export const getsalesBySegment = createAsyncThunk(
  "salesBySegment/get",
  async (request) => {
    const result = await axios.post(
      "http://localhost:4200/SalesBySegment",
      request
    );
    return result.data;
  }
);
