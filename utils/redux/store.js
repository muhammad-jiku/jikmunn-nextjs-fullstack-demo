import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
// import Reducer from './reducer';

export const store = configureStore({
  reducer: {
    app: reducer,
  },
});
