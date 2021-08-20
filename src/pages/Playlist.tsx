import React, { useEffect, useState } from "react";
import InputSearch from "../components/InputSearch";
import PlaylistFormModal from "../components/PlaylistFormModal";
import ProfileSection from "../components/ProfileSection";
import SongCard from "../components/SongCard";
import TextButton from "../components/TextButton";
import { useAppDispatch, useAppSelector } from "../data/hooks";
import { onAdd, onRemove } from "../data/playlistSlice";
import { setUser } from "../data/userSlice";

export default function Playlist() {
  const dispatch = useAppDispatch();
  const [keyword, setKeyword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [result, setResult] = useState<any>(null);
  const user_access_token = useAppSelector(
    (state) => state.userData.access_token
  );
  const user = useAppSelector((state) => state.userData.user);
  const playlist = useAppSelector((state) => state.playlistData.playlist);

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user_access_token !== ""]);

  const getUser = () => {
    fetch(`https://api.spotify.com/v1/me`, {
      headers: { Authorization: "Bearer " + user_access_token },
    })
      .then((response) => response.json())
      .then((response) => {
        dispatch(setUser(response));
      });
  };

  const getSearchResult = () => {
    fetch(`https://api.spotify.com/v1/search?q=${keyword}&type=track`, {
      headers: { Authorization: "Bearer " + user_access_token },
    })
      .then((response) => response.json())
      .then((response) => setResult(response.tracks));
  };

  return (
    <div className="bg-gray-600 mx-auto my-0 max-w-xl h-screen flex flex-col pt-8 pb-2 px-4 relative">
      {user.display_name && (
        <ProfileSection
          imgURL={user?.images[0].url}
          profileURL={user?.external_urls.spotify}
          username={user?.display_name}
        />
      )}
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
        onClick={() => getSearchResult()}
        className="mb-6"
      />
      {result ? (
        <>
          <span className="text-center font-bold text-white mb-2">
            Showing {result?.items?.length} result of {keyword}
          </span>
          <div className="flex flex-col space-y-4 overflow-y-auto">
            {result.items.map((track: any, i: number) => {
              return (
                <SongCard
                  key={i}
                  albumTitle={track.album.name}
                  artistName={track.artists[0].name}
                  imgURL={track.album.images[0].url}
                  selected={playlist.some(
                    (data) => data.trackURI === track.uri
                  )}
                  onSelected={() =>
                    dispatch(onAdd({ title: track.name, trackURI: track.uri }))
                  }
                  onDeselected={() =>
                    dispatch(onRemove({ trackURI: track.uri }))
                  }
                  songTitle={track.name}
                />
              );
            })}
          </div>
        </>
      ) : (
        <h3 className="text-center text-lg text-white font-bold">
          No Tracks Show, Go Search It!
        </h3>
      )}
    </div>
  );
}
