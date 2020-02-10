import update from 'immutability-helper';
import at from './at';
import initState from './initState';

export default (state = initState, actions) => {

  switch (actions.type) {
  
     
      case at.SET_USERS:
        return update(state, {
          users:{$set: actions.data}
      });

      case at.SET_CURRENT_USER:
        return update(state, {
          currentUser:{$set: actions.data}
      });
   
      case at.SET_CURRENT_USER_ID:
        return update(state, {
          currentUserId:{$set: actions.data}
      });
   

    default:
      return state;
  }
}

