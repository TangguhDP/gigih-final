# Tangguh's Spotify Login Clone

This is an clone app that use Typescript ReactJS, Tailwind and ReactRedux. This project is for GenerasiGIGIH 2021 final submission.

## Problem
1. Creating Login with Implicit Grant Flows.
2. Able to search for a song and show it.
3. Able to store and create playlist the the logged account.

## Features 🚀

1. Login with Spotify Account.
2. Search for songs.
3. Create Playlist with your added songs.
4. Showing your profile :')
5. And It's full Typescript too.

## How to run
1. Setting up the `env` first, make sure you had your own **Spotify Client Key** and Edit your **redirect uri** in the env. PS : create your own `env` and rename it `env.local` for development.
2. Open up your terminal, type `npm install` and wait.
3. After u done the installment process, now u should be able to start the project with `npm run start`.
4. I change the start and build to `craco` so it can build internal sass and etc for Tailwind everytime running or building.

## How to test
The only testing that I've been working on is in `./src/pages` directory. so if you need to run the test you just have to type `npm test --watch ./src/pages` it will run the `Playlist.test.tsx` and voilaaa!