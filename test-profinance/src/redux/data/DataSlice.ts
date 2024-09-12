import { TableRowData } from "@/types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface DataState {
  data: TableRowData[];
  filter: {
    barcode: string;
    garment: string;
    size: string;
    article: string;
  };
}

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const res = await fetch("/data/data.json");
  const jsonData = await res.json();
  return jsonData.data as TableRowData[];
});

const initialState: DataState = {
  data: [],
  filter: {
    barcode: "",
    garment: "",
    size: "",
    article: "",
  },
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    clearData(state) {
      state.data = [];
    },
    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { setData, clearData, setFilter } = dataSlice.actions;

export default dataSlice.reducer;
