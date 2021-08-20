import { createSlice } from "@reduxjs/toolkit";

export type selectedSong = {
  title: string;
  trackURI: string;
};

const playlist: Array<selectedSong> = [
  { title: "Halo Halo Bandung", trackURI: "tada" },
];

const initialState = {
  playlist: playlist,
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    onAdd: (state, action) => {
      state.playlist = [...state.playlist, action.payload];
    },
    onRemove: (state, action) => {
      const temp = state.playlist.filter(
        (track) => track.trackURI !== action.payload.trackURI
      );
      state.playlist = [...temp];
    },
  },
});

export const { onAdd, onRemove } = playlistSlice.actions;
export default playlistSlice.reducer;
