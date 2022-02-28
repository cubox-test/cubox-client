import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type InitialState = {
  isAuth: boolean;
  userId: string | null;
  roleId: number | null;
};

const initialState: InitialState = {
  isAuth: false,
  userId: null,
  roleId: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate(
      state,
      action: PayloadAction<{isAuth: boolean; roleId: number | null}>,
    ) {
      state.isAuth = action.payload.isAuth;
      state.roleId = action.payload.roleId;
    },
    setUserId(state, action: PayloadAction<{userId: string | null}>) {
      state.userId = action.payload.userId;
    },
  },
});

export default authSlice.reducer;
export const {authenticate, setUserId} = authSlice.actions;
