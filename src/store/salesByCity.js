import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { StatusCode } from "../StatusCode";

const initialState = {
  data: [],
  status: StatusCode.IDLE,
};

const salesByCity = createSlice({
  name: "state",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(getsalesByCity.pending, (state, action) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(getsalesByCity.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = StatusCode.IDLE;
      })
      .addCase(getsalesByCity.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
      });
  },
});

export default salesByCity.reducer;

export const getsalesByCity = createAsyncThunk(
  "salesByCity/get",
  async (request) => {
    const result = await axios.post(
      "http://localhost:4200/SalesByCity",
      request
    );
    return result.data;
  }
);
