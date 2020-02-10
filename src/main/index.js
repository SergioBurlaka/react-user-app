import {connect} from 'react-redux';
import Component from './Component';
import {withRouter} from "react-router-dom";


const stp = (state) => ({
 
});

const dtp = (dispatch) => ({
 
});

export default withRouter(connect(stp, dtp)(Component))