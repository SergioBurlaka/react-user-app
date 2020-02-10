import {connect} from 'react-redux';
import Component from './Component';
import {
  setUsers,
  setCurrentUser,
  setCurrentUserId,
  } from "./actions";



const stp = (s) => ({
  users: s.usersList.users,
});


const dtp = (d) => ({

  setUsers: (users) => {
    d(setUsers(users))
  },
  setCurrentUser: (users) => {
    d(setCurrentUser(users))
  },
  setCurrentUserId: (userId) => {
    d(setCurrentUserId(userId))
  },

});


export default connect(stp, dtp)(Component);


