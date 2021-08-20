import React, { useState } from "react";
import TextInputLabel from "./TextInputLabel";
import TextAreaLabel from "./TextAreaLabel";
import TextButton from "./TextButton";
import { useAppDispatch, useAppSelector } from "../data/hooks";
import { onRemove, onClear } from "../data/playlistSlice";

type PlaylistFormModalPropsType = {
  isShow: boolean;
  setShow: Function;
};

export default function PlaylistFormModal({
  isShow,
  setShow,
}: PlaylistFormModalPropsType) {
  const dispatch = useAppDispatch();
  const [playlistForm, setPlaylistForm] = useState({
    title: "",
    description: "",
  });
  const playlist = useAppSelector((state) => state.playlistData.playlist);
  const user_access_token = useAppSelector(
    (state) => state.userData.access_token
  );
  const user = useAppSelector((state) => state.userData.user);

  const handleOnChange = (input: any) => {
    const { name, value } = input.target;
    setPlaylistForm({ ...playlistForm, [name]: value });
  };

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const playlist = await createPlaylist();
    console.log(playlist);
    addTrackToPlaylist(playlist.id);
    alert("Playlist created");
    clearState();
  };

  const clearState = () => {
    setPlaylistForm({
      title: "",
      description: "",
    });
    dispatch(onClear());
  };

  const createPlaylist = () => {
    return fetch(`https://api.spotify.com/v1/users/${user.id}/playlists`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + user_access_token,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: playlistForm.title,
        description: playlistForm.description,
        public: false,
      }),
    })
      .then((response) => response.json())
      .catch((err) => alert(err));
  };

  const addTrackToPlaylist = (playlistID: string) => {
    const tracksSelected = playlist.map((track) => track.trackURI);

    fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + user_access_token,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        uris: tracksSelected,
      }),
    })
      .then((response) => response.json())
      .catch((err) => alert(err));
  };

  return (
    <>
      {isShow && (
        <>
          <div
            onClick={() => setShow(false)}
            className="bg-black opacity-40 absolute h-screen w-full z-10 inset-0"
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
              required={true}
            />
            <TextAreaLabel
              label="PLAYLIST DESCRIPTION"
              name="description"
              value={playlistForm.description}
              placeholder="Playlist Description"
              onChange={handleOnChange}
              required={true}
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
                        className="flex items-center justify-between space-x-2 mb-2"
                      >
                        <span className="truncate text-base flex-grow">
                          {i + 1}. {track.title}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            dispatch(onRemove({ trackURI: track.trackURI }))
                          }
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
