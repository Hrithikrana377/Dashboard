import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { StatusCode } from "../StatusCode";

const initialState = {
  data: [],
  status: StatusCode.IDLE,
};

const saleSlice = createSlice({
  name: "sale",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSalesRecord.pending, (state, action) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(getSalesRecord.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = StatusCode.IDLE;
      })
      .addCase(getSalesRecord.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
      })
      .addCase(getRecordsOnParameter.pending, (state, action) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(getRecordsOnParameter.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = StatusCode.IDLE;
      })
      .addCase(getRecordsOnParameter.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
      });
  },
});

export default saleSlice.reducer;

export const getSalesRecord = createAsyncThunk("sales/get", async () => {
  const result = await axios.get("https://dashboard-api-ocib.onrender.com/usersData");
  return result.data;
});

export const getRecordsOnParameter = createAsyncThunk(
  "summary/post",
  async (request) => {
    const response = await axios.post("https://dashboard-api-ocib.onrender.com/summary", request);
    console.log(response.data);
    return response.data;
  }
);
