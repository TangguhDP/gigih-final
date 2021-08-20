import React from "react";
import TextButton from "../components/TextButton";
import generateRandomString from "../helper/generateRandomString";

export default function Login() {
  const clientID: string = process.env.REACT_APP_SPOTIFY_CLIENT_ID ?? "";
  const redirectURI: string =
    process.env.REACT_APP_REDIRECT_URI ?? "http://localhost:3000/";

  const loginSpotify = () => {
    const state = generateRandomString(16);
    localStorage.setItem("spotify_auth_state", state);
    const scope = "user-read-private user-read-email playlist-modify-private";
    let url = "https://accounts.spotify.com/authorize";
    url += "?response_type=token";
    url += "&client_id=" + encodeURIComponent(clientID);
    url += "&scope=" + encodeURIComponent(scope);
    url += "&redirect_uri=" + encodeURIComponent(redirectURI);
    url += "&state=" + encodeURIComponent(state);
    console.log(url);

    window.location.href = url;
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <TextButton
        name="login"
        value="LOGIN SPOTIFY"
        onClick={loginSpotify}
        className="transform hover:-translate-y-1 hover:scale-110 bg-green-600 hover:bg-green-700 font-bold text-lg"
      />
    </div>
  );
}
