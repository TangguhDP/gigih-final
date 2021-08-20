import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  access_token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.access_token = action.payload;
    },
  },
});

export const { setAccessToken } = userSlice.actions;
export default userSlice.reducer;
