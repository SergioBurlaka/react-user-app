
import at from './at';


const setUsers = (users) => {
  return (dispatch, getState) => {
    dispatch({type: at.SET_USERS, data: users})

  }
};

const setCurrentUser = (user) => {
  return (dispatch, getState) => {
    dispatch({type: at.SET_CURRENT_USER, data: user})

  }
};
const setCurrentUserId = (userId) => {
  return (dispatch, getState) => {
    dispatch({type: at.SET_CURRENT_USER_ID, data: userId})

  }
};





export {
  setUsers,
  setCurrentUser,
  setCurrentUserId
 }