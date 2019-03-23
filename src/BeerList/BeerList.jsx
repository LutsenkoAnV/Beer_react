import React from 'react';
// import ixhr from '../i/XHR/ixhr.jsx';
// import PromiseXHR from '../i/XHR/PromiseXHR.js';

import iFetch from '../i/XHR/iFetch.js';
import BeerCard from '../BeerCard/BeerCard.jsx';

export default class BeerList extends React.Component {

  state = {
    beerList: []
  }
  componentWillMount() {
    // ixhr({
    //       method: 'GET',
    //       url: 'https://api.punkapi.com/v2/beers'
    //     },
    //     this.getBeerSuccess,
    //     this.getBeerError)

    // PromiseXHR({
    //     method: 'GET',
    //     url: 'https://api.punkapi.com/v2/beers'
    // })
    // .then(this.getBeerSuccess)
    // .catch(this.getBeerError)

    iFetch({
      method: 'GET',
      url: 'https://api.punkapi.com/v2/beers'
    })
    .then(this.getBeerSuccess)
    .catch(this.getBeerError)
  }

  getBeerSuccess = data => {
    this.setState({beerList: data});
  }

  getBeerError = response => {
    console.log({response})
  }

  render() {
    let {beerList} = this.state;
    const {searched} = this.props;

    if (searched) {
      beerList = beerList.filter(beerInfo => beerInfo.name.includes(searched));
    }
    return <div className='beer-list'>
        {beerList.map(beerInfo =>
          <BeerCard
                key={beerInfo.id}
                image={beerInfo.image_url}
                title={beerInfo.name}
                description={beerInfo.description}/>)}
    </div>;
  }
}