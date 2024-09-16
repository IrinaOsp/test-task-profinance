import { TableRowData } from "@/types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface DataState {
  data: TableRowData[];
  filteredData: TableRowData[];
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
  filteredData: [],
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
      state.filteredData = action.payload;
    },
    clearData(state) {
      state.data = [];
      state.filteredData = [];
    },
    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload };
      state.filteredData = state.data.filter((row) => {
        return (
          row.barcode
            .toLowerCase()
            .includes(state.filter.barcode.toLowerCase()) &&
          row.garment
            .toLowerCase()
            .includes(state.filter.garment.toLowerCase()) &&
          row.size.toLowerCase().includes(state.filter.size.toLowerCase()) &&
          row.article.toLowerCase().includes(state.filter.article.toLowerCase())
        );
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.filteredData = action.payload;
    });
  },
});

export const { setData, clearData, setFilter } = dataSlice.actions;

export default dataSlice.reducer;
