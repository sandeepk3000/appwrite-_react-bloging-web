import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  status: true,
  userData: null
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true, 
      state.userData = action.payload.userData;
    },
    logout: (state, action) => {
      state.status = false,
       state.userData = null;
    }
  }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
