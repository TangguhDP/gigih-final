import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Playlist from "./pages/Playlist";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/create-playlist">
          <Playlist />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
