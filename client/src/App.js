import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import HomePage from './pages/HomePage';
import Nav from './components/Nav';

import EditLocation from './pages/EditLocation';
import ListLocations from "./pages/ListLocations";

import AddEvent from './components/AddEvent';
import ListEvents from "./pages/ListEvents"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
         <Route exact path="/" component={HomePage}></Route>
         <Route exact path="/api/locations" component={ListLocations}></Route>
         <Route exact path="/api/events" component={ListEvents}></Route>
         <Route exact path="/api/locations/:id" component={EditLocation}></Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
