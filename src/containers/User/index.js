import {connect} from 'react-redux';
import Component from './Component';
import {
  setProduct,
  } from "./actions";



const stp = (s) => ({
  currentUser: s.usersList.currentUser,
  currentUserId: s.usersList.currentUserId,
});


const dtp = (d) => ({

  setProduct: (sn) => {
    d(setProduct(sn))
  },
 

});


export default connect(stp, dtp)(Component);
