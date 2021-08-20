import React from "react";
import LabelWithText from "./LabelWithText";
import TextButton from "./TextButton";

type SongCardPropsType = {
  imgURL: string;
  songTitle: string;
  artistName: string;
  albumTitle: string;
  onSelected: React.MouseEventHandler<HTMLButtonElement> | undefined;
  selected: boolean;
  onDeselected: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export default function SongCard({
  imgURL,
  songTitle,
  artistName,
  albumTitle,
  onDeselected,
  onSelected,
  selected,
}: SongCardPropsType) {
  return (
    <div className="bg-white w-full flex flex-row rounded-md shadow-md p-2">
      <img
        className="w-32 h-auto mr-2.5"
        src={imgURL}
        alt="song-cover"
        width="50px"
        height="50px"
      />
      <div className="h-full flex-grow grid grid-cols-2 gap-y-4 gap-x-2">
        <LabelWithText label="Title" text={songTitle} />
        <LabelWithText label="Artist" text={artistName} />
        <LabelWithText label="Album" text={albumTitle} />
        <TextButton
          name={selected ? "remove-playlist" : "add-playlist"}
          value={selected ? "Deselect" : "Select"}
          onClick={selected ? onDeselected : onSelected}
          className="bg-green-600 border-green-600 font-bold hover:border-white hover:bg-green-700"
        />
      </div>
    </div>
  );
}
