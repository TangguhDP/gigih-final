import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../data/store";

import Playlist from "./Playlist";

test("Checking modal playlist show", () => {
  render(
    <Provider store={store}>
      <Playlist />
    </Provider>
  );

  const playlistButton = screen.getByText(/playlist/i);

  userEvent.click(playlistButton);

  const playlistFormTitleLabel = screen.getByText(/playlist title/i);
  expect(playlistFormTitleLabel).toBeInTheDocument();
  screen.debug();
});
