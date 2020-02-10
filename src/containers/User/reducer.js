import update from 'immutability-helper';
import at from './at';
import initState from './initState';

export default (state = initState, actions) => {

  switch (actions.type) {
   
      case at.SET_DISCOVERY:
        return update(state, {
          discoveryInfo:{$set: actions.data}
      });
      case at.SET_DISCOVERY_TX_DELAY:
        return update(state, {
          txDelay:{$set: actions.data}
      });
      case at.SET_DISCOVERY_METAL_DELAY:
        return update(state, {
          metalDelay:{$set: actions.data}
      });
   

    default:
      return state;
  }
}