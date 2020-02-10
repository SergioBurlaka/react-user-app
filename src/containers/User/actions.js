
import at from './at';


const setProduct = (sn) => {
  return (dispatch, getState) => {
    dispatch({type: at.SET_DISCOVERY, data: 'set discovery'})

  }
};





export {
  setProduct,
 }


 