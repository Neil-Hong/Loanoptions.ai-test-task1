import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: null,
    loading: false,
    error: null,
};

export const fetchData = createAsyncThunk("fetchData/getList", async () => {
    const response = await fetch("http://universities.hipolabs.com/search?country=Australia");
    const data = await response.json();
    return data;
});

const fetchDataSlice = createSlice({
    name: "fetchData",
    initialState,
    reducers: {
        handleDelete: (state) => {
            if (state.list) {
                state.list.splice(-1);
                state.list = [...state.list];
            }
        },
        handleAdd: (state) => {
            if (state.list) {
                state.list.push(state.list[0]);
                state.list = [...state.list];
            }
        },
    },
    extraReducers: {
        [fetchData.pending]: (state) => {
            state.loading = true;
        },
        [fetchData.fulfilled]: (state, action) => {
            state.loading = false;
            state.list = action.payload;
            state.error = null;
        },
        [fetchData.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const { handleDelete, handleAdd } = fetchDataSlice.actions;

export default fetchDataSlice.reducer;
