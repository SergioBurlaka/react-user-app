import { combineReducers } from 'redux';
import usersList from './containers/UsersList/reducer';
import user from './containers/User/reducer';
import editUser from './containers/EditUser/reducer';

export default combineReducers({
  usersList,
  user,
  editUser,
})