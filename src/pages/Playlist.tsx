import React, { useState } from "react";
import InputSearch from "../components/InputSearch";
import PlaylistFormModal from "../components/PlaylistFormModal";
import SongCard from "../components/SongCard";
import TextButton from "../components/TextButton";

export default function Playlist() {
  const [keyword, setKeyword] = useState("");
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="bg-gray-600 mx-auto my-0 max-w-xl h-screen flex flex-col pt-8 pb-2 px-4 relative">
      <PlaylistFormModal isShow={showModal} setShow={setShowModal} />
      <TextButton
        name="show-playlist"
        onClick={() => setShowModal(true)}
        className="bg-green-600 border-green-600 font-bold hover:border-white hover:bg-green-700 w-full mb-2"
      >
        <span className="flex flex-row justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          PLAYLIST
        </span>
      </TextButton>
      <InputSearch
        name="search"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onClick={() => console.log(keyword)}
        className="mb-6"
      />
      <span className="text-center font-bold text-white mb-2">
        Showing 20 result of "Song Title"
      </span>
      <div className="flex flex-col space-y-4 overflow-y-auto">
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
      </div>
    </div>
  );
}
