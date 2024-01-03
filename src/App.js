import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import About from "./components/About";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="This is amazing react course"/>
          <div className="container">
            <Switch>
              <Route exact path="/about">
                <About />
              </Route>
              {/* <Route exact path="/users">
            <Users />
          </Route> */}
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
        <h1>thanks</h1>
      </NoteState>
    </>
  );
}

export default App;
