import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  value: 0,
  items: [],
  fetchStatus: 'idle', // idle | loading | succeeded | failed
  addStatus: 'idle', // idle | loading | succeeded | failed
  fetchError: null,
  addError: null,
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
    // Обработка статусов для fetchData
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

    // Обработка статусов для addPerson
    builder
      .addCase(addPerson.pending, (state) => {
        state.addStatus = 'loading';
        state.addError = null;
      })
      .addCase(addPerson.fulfilled, (state, action) => {
        state.addStatus = 'succeeded';
        state.items.push(action.payload.name); // Добавляем новую персону в items
      })
      .addCase(addPerson.rejected, (state, action) => {
        state.addStatus = 'failed';
        state.addError = action.payload;
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

// Асинхронный запрос для добавления новой персоны
export const addPerson = createAsyncThunk(
  'counter/addPerson',
  async (newPerson, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/person',
        newPerson
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
