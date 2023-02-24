//  external import
import { configureStore } from '@reduxjs/toolkit';

//  internal imports
import reducer from './reducer';
import listenerMiddleware from './listener';
// import Reducer from './reducer';

export const store = configureStore({
  reducer: {
    app: reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});
