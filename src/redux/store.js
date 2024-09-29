import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counter/counterSlice';
import formReducer from './slices/form/formSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    form: formReducer,
  },
});
