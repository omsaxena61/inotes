import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import About from "./components/About";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="This is amazing react course"/>
          <div className="container">
            <Switch>
            <Route exact path="/">
                <Home />
              </Route>
              <Route exact path ="/about">
                <About />
              </Route>
              {/* <Route exact path="/users">
            <Users />
          </Route> */}
             
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/Signup">
                <Signup />
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
