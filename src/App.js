import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Header from './Header/Header.jsx';
import SearchForm from './SearchForm/SearchForm.jsx';
// import BeerCard from './BeerCard/BeerCard.jsx';
import BeerList from './BeerList/BeerList.jsx';
// import logo from './logo.svg';
import './App.css';
import Favorites from './Favorites/Favorites.jsx';

class App extends Component {
  state ={
    searched: ''
  }

  searchChanged = value => this.setState({searched: value})

  render() {
    const {searched} = this.state;

    return <Router>
             <div className="app">
             <Header/>

             <Switch>
                 <Route exact path='/' render={() => [
                   <SearchForm key = 'SearchForm' onChangeHandler={this.searchChanged}/>,
                   <BeerList key = 'BeerList' searched={searched}/>
                 ]}/>

                 <Route path='/favorites' component={Favorites}/>
             </Switch>

             </div>
           </Router>
  }
}

export default App;
