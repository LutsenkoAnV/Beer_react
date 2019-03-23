import React, { Component } from 'react';

import Header from './Header/Header.jsx';
import SearchForm from './SearchForm/SearchForm.jsx';
// import BeerCard from './BeerCard/BeerCard.jsx';
import BeerList from './BeerList/BeerList.jsx';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state ={
    searched: ''
  }

  searchChanged = value => this.setState({searched: value})

  render() {
    const {searched} = this.state;

    return <div className="app">
           <Header/>
           <SearchForm onChangeHandler={this.searchChanged}/>
           <BeerList searched={searched}/>
           </div>;
           // <BeerCard
           //    image='https://images.punkapi.com/v2/keg.png'
           //    title='Buzz'
           //    description='A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.'/>
  }
}

export default App;
