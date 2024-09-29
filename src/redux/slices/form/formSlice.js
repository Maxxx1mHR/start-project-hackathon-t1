import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  formState: {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
  },
  items: [],
  addStatus: '',
  addError: null,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(addPerson.pending, (state) => {
        state.addStatus = 'loading';
        state.addError = null;
      })
      .addCase(addPerson.fulfilled, (state) => {
        state.addStatus = 'succeeded';
      })
      .addCase(addPerson.rejected, (state, action) => {
        state.addStatus = 'failed';
        state.fetchError = action.payload;
      });
  },
});

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

export const { updateFormField } = formSlice.actions;

export default formSlice.reducer;
