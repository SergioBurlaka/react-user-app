import {connect} from 'react-redux';
import Component from './Component';
// import {
//   setUsers,
//   } from "./actions";



const stp = (s) => ({
    currentUser: s.usersList.currentUser,

});


const dtp = (d) => ({



});


export default connect(stp, dtp)(Component);


