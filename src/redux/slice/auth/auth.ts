import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate(state, action: PayloadAction<{isAuth: boolean}>) {
      state.isAuth = action.payload.isAuth;
    },
  },
});

export default authSlice.reducer;
export const {authenticate} = authSlice.actions;
