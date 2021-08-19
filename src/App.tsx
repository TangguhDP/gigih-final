import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/create-playlist">
          <h1>Playlist</h1>
          <Link to="/">Pindah</Link>
        </Route>
        <Route exact path="/">
          <h1>Home</h1>
          <Link to="/create-playlist">Pindah</Link>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
