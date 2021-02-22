import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import {composeWithDevTools} from 'redux-devtools-extension'

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
