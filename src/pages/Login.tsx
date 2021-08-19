import React from "react";
import { Link } from "react-router-dom";
import TextButton from "../components/TextButton";

export default function Login() {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <Link to="/create-playlist">
        <TextButton
          name="login"
          value="LOGIN SPOTIFY"
          className="transform hover:-translate-y-1 hover:scale-110 bg-green-600 hover:bg-green-700 font-bold text-lg"
        />
      </Link>
    </div>
  );
}
