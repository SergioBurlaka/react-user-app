import React  from 'react';
// import PropTypes from 'prop-types';
import './User.scss';
import Button from "../../components/Button/index";
import ModalWindow from "../../components/Modal/index";
import deleteModalContent from "../../components/Modal/deleteModalContent";

import routes from "../../rootRoutes/routes";



class User extends React.Component {
  state = {
    currentUserState: {},
    currentUserId: {},
    showModal: false
  };

  componentDidMount() {

    this.setState({ 
      currentUserId: this.props.currentUserId,
      currentUserState: this.props.currentUser
    });
  }



  goToUsersList = () => {
    const history =  this.props.history
     history.push(routes.users_list);
   }

  goToEditUser = () => {
    const history =  this.props.history
     history.push(routes.edit_user);
   }


  handleOpenModal = () => {
    this.setState({ showModal: true });
  }
  
  handleCloseModal = () => {
    this.setState({ showModal: false });
  }
  
  deleteUser = () => {

    console.log("delete user")

 }




  render() {

    const {currentUserState} = this.state
 


    return (
      <div className="user-section">
        <div>
          <ModalWindow 
            isOpen={this.state.showModal}
            content ={ deleteModalContent(this.handleCloseModal, this.deleteUser )}
            contentLabel="Minimal Modal Example"
          />
        </div>
        <div className="section-wrapper">
          <div className="user-page-header">
              <h1> User Information</h1>
              <Button
                name="Edit User"
                onClick={() => {
                  this.goToEditUser()
                }}
              />
              <Button
                name="Delete User"
                onClick={() => {
                  this.handleOpenModal()
                }}
              />
            
          </div>
          <div className="user-page-info-container">
            <h2>Personal</h2>
            <div className="user-page-info">
              <div className="first-colunm">
                <div className="line-wrapper">
                  <div className="name">
                    First name
                  </div>
                  <div className="value">
                    {currentUserState && currentUserState.first_name}
                  </div>
              </div>
                <div className="line-wrapper">
                  <div className="name">
                    Last name
                  </div>
                  <div className="value">
                    {currentUserState &&  currentUserState.last_name}
                  </div>
              </div>
                <div className="line-wrapper">
                  <div className="name">
                    Date of birth
                  </div>
                  <div className="value">
                  {currentUserState &&  currentUserState.birth_date}
                  </div>
              </div>
              </div>
              <div className="second-colunm">
                  <div className="line-wrapper">
                    <div className="name">
                      Gender
                    </div>
                    <div className="value">
                      {currentUserState &&  currentUserState.gender}
                    </div>
                </div>
                <div className="line-wrapper">
                  <div className="name">
                    profession
                  </div>
                  <div className="value">
                  {currentUserState &&  currentUserState.job}
                  </div>
              </div>
                <div className="line-wrapper">
                  <div className="name">
                    Is active 
                  </div>
                  <div className="value">
                    {currentUserState &&  currentUserState.gender ? 'Yes': 'No'}
                  </div>
                </div>
              </div>
            </div>
            <h2> Biography</h2>
            <div className="user-bio">
              {currentUserState &&  currentUserState.biography}
            </div>

          </div>
        </div>
      </div>
    )
  }
}

// User.propTypes = {
//   deviceConnected: PropTypes.bool,
//   devicesData: PropTypes.array,
//   device: PropTypes.object,
//   discoveryToolResponse: PropTypes.object,
//   discoveryTXDelay: PropTypes.object,
//   discoveryMetalDelay: PropTypes.object,
//   startTransmission: PropTypes.func,
//   stopTransmission: PropTypes.func,
//   getTxMetalDelay: PropTypes.func,
//   setTxDelay: PropTypes.func,
//   setMetalDelay: PropTypes.func,
// };


export default User;