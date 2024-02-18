// src/redux/store.js

import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import rootReducer,{RedState} from './reducers';
import { combineReducers } from 'redux';

export interface RootState {
  red: RedState;
  // Add other reducer states as needed
}
const rootReducers = combineReducers({
  red: rootReducer,
  // Add other reducers as needed
});

const store = configureStore({reducer:rootReducers});

export default store;
