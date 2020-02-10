import React from 'react';
// import PropTypes from 'prop-types';
import './Modal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from "../Button/index";
import './deleteModalContent.scss';




const deleteModalContent  = (closeCb, deleteCb ) => {
  return ( 
    <div className="modal-content">
          <div className="header">
            <span>Confirm delete</span> 
            <FontAwesomeIcon icon={faTimes}
              onClick={() => {
                closeCb()
              }}
            />
          </div>
          <div className="body">
            Do you really want to delete user?
          </div>
          <div className="footer">
            <Button
              name="Cancel"
              className="cancel"
              onClick={() => {
                closeCb()
              }}
            />
             <Button
              name="Delete"
              className="delete"
              onClick={() => {
                deleteCb()
              }}
            />
          </div>

    </div>
    
   )
            
}

export default deleteModalContent;

