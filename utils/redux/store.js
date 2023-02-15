import { configureStore } from '@reduxjs/toolkit';
import listenerMiddleware from './listener';
import reducer from './reducer';
// import Reducer from './reducer';

export const store = configureStore({
  reducer: {
    app: reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});
