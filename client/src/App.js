import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import HomePage from './pages/HomePage';
import Nav from './components/Nav';
import Map from './pages/Map';
import ListLocations from "./pages/ListLocations";
import ListEvents from "./pages/ListEvents"
import FilterSection from "./components/FilterSection"
import ArtistCard from './components/ArtistCard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
         <Route exact path="/" component={HomePage}></Route>
         <Route exact path="/map" component={Map}></Route>
         <Route exact path="/api/locations" component={ListLocations}></Route>
         <Route exact path="/api/events" component={ListEvents}></Route>
         <Route exact path="/filter" component={FilterSection}></Route>
         <Route exact path="/artist" component={ArtistCard}></Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
