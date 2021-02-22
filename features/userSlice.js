import { createSlice } from '@reduxjs/toolkit';
import { isAuth } from '../actions/auth';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: isAuth() && isAuth(),
  },
  reducers: {
    login: (state,action) => {
        state.user = action.payload;
      },
      logout:(state) => {
        state.user = null;
      }
  },
});

export const { login,logout } = userSlice.actions;

export const selectUser = state => state.user.user;

export default userSlice.reducer;
