import React from "react";
import LabelWithText from "./LabelWithText";
import TextButton from "./TextButton";

export default function SongCard() {
  return (
    <div className="bg-white w-full flex flex-row rounded-md shadow-md p-2">
      <img
        className="w-32 h-auto mr-2.5"
        src="https://via.placeholder.com/200/000/fff.png"
        alt="song-cover"
        width="50px"
        height="50px"
      />
      <div className="h-full flex-grow grid grid-cols-2 gap-y-4 gap-x-2">
        <LabelWithText label="Title" text="Song Title" />
        <LabelWithText label="Artist" text="Song Title" />
        <LabelWithText label="Album" text="Song Title" />
        <TextButton
          name="add-playlist"
          value="Add to Playlist"
          className="bg-green-600 border-green-600 font-bold hover:border-white hover:bg-green-700"
        />
      </div>
    </div>
  );
}
