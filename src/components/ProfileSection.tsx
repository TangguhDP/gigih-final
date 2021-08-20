import React from "react";

type ProfileSectionPropsType = {
  username: string;
  imgURL: string;
  profileURL: string;
};

export default function ProfileSection({
  username,
  imgURL,
  profileURL,
}: ProfileSectionPropsType) {
  return (
    <div className="flex flex-row space-x-4 items-center mb-4">
      <img
        className="w-20 h-20 rounded-full shadow-md ring-2 ring-white filter drop-shadow-lg cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 "
        src={imgURL}
        alt="song-cover"
        width="50px"
        height="50px"
        onClick={() => window.open(profileURL, "_blank")}
      />
      <span className="font-bold text-2xl text-white">
        Halo {username}, Selamat Datang!
      </span>
    </div>
  );
}
