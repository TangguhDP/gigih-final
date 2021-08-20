import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  access_token: "",
  user: {} as any,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.access_token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setAccessToken, setUser } = userSlice.actions;
export default userSlice.reducer;
