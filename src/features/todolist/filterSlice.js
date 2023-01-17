import { createSlice } from "@reduxjs/toolkit";

const initialState = { filter: "reset", filterAction: null };

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload.filterId;
      state.filterAction = action.payload.filterAction;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
