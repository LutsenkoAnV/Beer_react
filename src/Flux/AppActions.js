import {Dispatcher} from 'flux';

const iDispatcher = new Dispatcher();

export default {
  iDispatcher,
  loadBeerList: function() {
    iDispatcher.dispatch({
      eventName: 'loadBeerList'
    });
  },
  toggleToFavorites: function(id, isFavor) {
    iDispatcher.dispatch({
      eventName: 'toggleToFavorites',
      id,
      isFavor
    });
  }
};
