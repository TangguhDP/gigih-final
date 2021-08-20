import React, { useState } from "react";
import TextInputLabel from "./TextInputLabel";
import TextAreaLabel from "./TextAreaLabel";
import TextButton from "./TextButton";
import { useAppSelector } from "../data/hooks";

type PlaylistFormModalPropsType = {
  isShow: boolean;
  setShow: Function;
};

export default function PlaylistFormModal({
  isShow,
  setShow,
}: PlaylistFormModalPropsType) {
  const [playlistForm, setPlaylistForm] = useState({
    title: "",
    description: "",
  });
  const playlist = useAppSelector((state) => state.playlistData.playlist);

  const handleOnChange = (input: any) => {
    const { name, value } = input.target;
    setPlaylistForm({ ...playlistForm, [name]: value });
  };

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    alert("Playlist created");
    clearState();
  };

  const clearState = () => {
    setPlaylistForm({
      title: "",
      description: "",
    });
  };

  return (
    <>
      {isShow && (
        <>
          <div
            onClick={() => setShow(false)}
            className="bg-black opacity-25 absolute h-screen w-full z-10 inset-0"
          ></div>
          <form
            onSubmit={handleOnSubmit}
            style={{ height: 600 }}
            className="absolute w-5/6 bg-white z-20 inset-0 top-20 mx-auto my-0 rounded-md shadow-lg p-4 flex flex-col space-y-4"
          >
            <TextInputLabel
              label="PLAYLIST TITLE"
              name="title"
              value={playlistForm.title}
              onChange={handleOnChange}
              placeholder="Playlist Title"
            />
            <TextAreaLabel
              label="PLAYLIST DESCRIPTION"
              name="description"
              value={playlistForm.description}
              placeholder="Playlist Description"
              onChange={handleOnChange}
            />
            <TextButton
              type="submit"
              value="CREATE PLAYLIST"
              name="show-playlist"
              className="bg-green-600 border-green-600 font-bold hover:border-white hover:bg-green-700 w-full mb-2"
            />
            <div className="flex-grow flex flex-col overflow-auto w-full p-2 border-2 border-gray-400 rounded-md relative">
              <ol className="list-inside">
                {playlist.length > 0 ? (
                  playlist.map((track, i) => {
                    return (
                      <li
                        key={i}
                        className="flex items-center justify-between space-x-2"
                      >
                        <span className="truncate text-base flex-grow">
                          {i + 1}. {track.title}
                        </span>
                        <button
                          type="button"
                          onClick={() => alert(`Remove ${track.trackURI} `)}
                          className="transition duration-500 ease-in-out text-white border-2 rounded-md shadow-md tracking-wider p-1 text-xs bg-green-600 border-green-600 font-bold hover:border-white hover:bg-green-700"
                        >
                          REMOVE
                        </button>
                      </li>
                    );
                  })
                ) : (
                  <span className="text-center">Add some songs</span>
                )}
              </ol>
            </div>
          </form>
        </>
      )}
    </>
  );
}
