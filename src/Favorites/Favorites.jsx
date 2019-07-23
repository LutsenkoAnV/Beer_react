import React from 'react';
import AppStore from '../Flux/AppStore';
import BeerList from '../BeerList/BeerList';
import BeerCard from '../BeerCard/BeerCard';

export default class Favorites extends BeerList {
  render() {
    const {searched} = this.props,
          beerList = this.state.beerList.filter(beerInfo => AppStore.favorites[beerInfo.id]);

    return <div className='beer-list'>
        <h1>Favorites</h1>
        {beerList.map(beerInfo =>
          <BeerCard
                key={beerInfo.id}
                id={beerInfo.id}
                image={beerInfo.image_url}
                title={beerInfo.name}
                description={beerInfo.description}
                favorite={true}/>)}
    </div>;
  }
}
