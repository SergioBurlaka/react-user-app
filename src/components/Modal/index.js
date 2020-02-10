import React from 'react';
// import PropTypes from 'prop-types';
import './Modal.scss';

import ReactModal from 'react-modal';



const ModalWindow  = (props) => {
  const {
    isOpen,
    contentLabel,
    content,
  } = props;

  // componentDidMount(){
    // document.body.style.backgroundColor = "green";
  // }

  document.body.style.overflow = !isOpen ? "auto" : "hidden";
  document.body.style.height =  !isOpen ? "auto" : "100%";

  return ( 
      <ReactModal 
        isOpen={isOpen}  
        ontentLabel={contentLabel} 
        ariaHideApp={false}
        className="Modal"
        overlayClassName="Overlay"
        >
        {content}
      </ReactModal>
   )
}




// ModalWindow.propTypes = {
//   name: PropTypes.string,
//   onClick: PropTypes.func,
// };


export default ModalWindow;

