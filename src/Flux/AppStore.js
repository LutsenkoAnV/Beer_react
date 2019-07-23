import MicroEvent from 'microevent';
import AppActions from '../Flux/AppActions.js';
import iFetch from '../i/XHR/iFetch.js';

const AppStore = new MicroEvent(),
      favorites = window.localStorage.getItem('favorites');

AppStore.favorites = {};
AppStore.beerList = [];

if (favorites) {
  try {
    AppStore.favorites = JSON.parse(favorites);
  } catch(ex) {
    console.error('Parse favorites failed', ex);
  }

}
//add logs
AppActions.iDispatcher.register(console.log);

// add Dispatcher
AppActions.iDispatcher.register(payload => {
  switch (payload.eventName) {
    case 'toggleToFavorites':
      AppStore.favorites[payload.id] = payload.isFavor;
      window.localStorage.setItem('favorites', JSON.stringify(AppStore.favorites));
      AppStore.trigger('favorites-update');
    break;
    case 'loadBeerList':
      iFetch({
        method: 'GET',
        url: 'https://api.punkapi.com/v2/beers'
      })
      .then(data => {
        AppStore.beerList = data;
        AppStore.trigger('beer-list-update');
      })
      .catch(response => console.error({response}));
      break;

  }
  return true;
});

export default AppStore;
