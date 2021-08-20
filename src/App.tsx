import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./data/hooks";
import Login from "./pages/Login";
import Playlist from "./pages/Playlist";
import { setAccessToken } from "./data/userSlice";
import getHashParams from "./helper/getHashParams";

function App() {
  const dispatch = useAppDispatch();
  const user_access_token = useAppSelector(
    (state) => state.userData.access_token
  );

  const setToken = () => {
    const params = getHashParams();
    dispatch(setAccessToken(params.access_token));
  };

  useEffect(() => {
    setToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/create-playlist">
          {user_access_token ? <Playlist /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/">
          {!user_access_token ? <Login /> : <Redirect to="/create-playlist" />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
