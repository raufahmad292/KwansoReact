// src/redux/reducers.js

import { User } from '../types/users';
import { SELECT_USER } from './action';


export interface RedState {
  // Define the structure of your red state
  selectedUser: User| null;
}

// Define the initial state
const initialState: RedState  = {
  selectedUser: null,
  // Initialize other properties
};

const rootReducer = (state: RedState  = initialState, action:any):RedState => {
  switch (action.type) {
    case SELECT_USER:
      return {
        ...state,
        selectedUser: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
