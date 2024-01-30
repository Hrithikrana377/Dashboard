import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { StatusCode } from "../StatusCode";

const initialState = {
  data: [],
  status: StatusCode.IDLE,
};

const stateSlice = createSlice({
  name: "state",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStates.pending, (state, action) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(getStates.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = StatusCode.IDLE;
      })
      .addCase(getStates.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
      });
  },
});

export default stateSlice.reducer;

export const getStates = createAsyncThunk("states/get", async () => {
  const result = await axios.get("http://localhost:4200/states");
  return result.data;
});
