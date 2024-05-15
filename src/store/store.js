import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    login: false,
    actualUser: {
      id: "",
      username: "",
      password: "",
    },
  },
  reducers: {
    login: (state) => {
      state.login = true;
    },
    logout: (state) => {
      state.login = false;
    },
    setActualUser: (state, action) => {
      state.actualUser = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
