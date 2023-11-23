
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import Navbar from './components/Navbar';

import About from './components/About';
import Home from './components/Home';
import NoteState from './context/notes/NoteState';


function App() {
  return (
    <>
    <NoteState>
    <Router>
    <Navbar/>
     
      <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          {/* <Route exact path="/users">
            <Users />
          </Route> */}
           <Route exact path="/">
            <Home/>
          </Route>
          
        </Switch>
        </Router>
        </NoteState>
    </>
  );
}

export default App;
