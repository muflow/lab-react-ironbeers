import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer'
import BeerDetails from './components/BeerDetails' //occhio
import NewBeer from './components/NewBeer';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Home /> */}


        <Switch>
        <Route exact path="/new-beer" component={NewBeer} />
          <Route exact path='/' component={Home}/>
          <Route exact path='/beers' component={AllBeers}/>
          <Route exact path="/beers/:beerId" component={BeerDetails} />
          <Route path='/randombeer' component={RandomBeer}/>
          
         
        </Switch>
      </div>
    );
  }
}
 
export default App;
