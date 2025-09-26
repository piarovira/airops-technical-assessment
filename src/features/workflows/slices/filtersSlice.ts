import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
  sort: string;
  search: string;
}

const initialState: FiltersState = {
  sort: "",
  search: "",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { setSort, setSearch } = filtersSlice.actions;

export default filtersSlice.reducer;
