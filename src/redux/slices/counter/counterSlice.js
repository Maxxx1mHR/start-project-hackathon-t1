import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  value: 0,
  items: [],
  fetchStatus: 'idle',
  fetchError: null,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.fetchStatus = 'loading';
        state.fetchError = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.fetchStatus = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.fetchStatus = 'failed';
        state.fetchError = action.payload;
      });
  },
});

// Асинхронный запрос для получения данных
export const fetchData = createAsyncThunk(
  'counter/fetchData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:3000/person');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
