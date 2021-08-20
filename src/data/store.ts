import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import playlistReducer from "./playlistSlice";

const store = configureStore({
  reducer: {
    userData: userReducer,
    playlistData: playlistReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
