//  external import
import { createListenerMiddleware } from '@reduxjs/toolkit';

//  internal imports
import { toggleChangeAction, updateAction } from './reducer';

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: toggleChangeAction,
  effect: async (action, listenerApi) => {
    listenerApi.dispatch(updateAction(action.payload));
  },
});

export default listenerMiddleware;
