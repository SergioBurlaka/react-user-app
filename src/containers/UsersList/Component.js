import React  from 'react';
import PropTypes from 'prop-types';
import './UsersList.scss';
import Button from "../../components/Button/index";
import ModalWindow from "../../components/Modal/index";
import deleteModalContent from "../../components/Modal/deleteModalContent";
import ApiService from "../../ApiService/index";
import routes from "../../rootRoutes/routes";
import { NotificationManager} from 'react-notifications';




import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';





class UsersList extends React.Component {
  state = {
    users: [],
    showColection: false,
    selectedOrder: null,
    selectedOrderIndex: null,
    showModal: false
  };

  componentDidMount() {

    this.props.setCurrentUser(null)


    ApiService.getUsers()
    .then(res => {
      this.setState({users: res.data});
      this.props.setUsers(res.data)
      this.createNotification('success','')
    })
    .catch(err => {
      console.log("catch err ", err)
      const {users} = this.props
      this.setState({users: users });
      this.createNotification('error', err)

    })
    
    
  }

  createNotification = (type, param) => {
   
    switch (type) {
    
      case 'success':
        NotificationManager.success('Success!  Users list was loaded', '', 2000);
        break;
    
      case 'error':
        NotificationManager.error(` ${param}`, '', 5000, () => {
        });
        break;
      default:
          break;
    }
  };



  componentWillReceiveProps(next) {
    this.setState({users: next.users});
  }



  editUser = () => {
    const history =  this.props.history
     history.push(routes.edit_user);
   }

  deleteUser = () => {

      console.log("delete user")

   }

  addUser = () => {
    const history =  this.props.history
    history.push(routes.edit_user);
   }

  goToUser = () => {
    const history =  this.props.history
    history.push(routes.user);
   }


   handleOpenModal = () => {
    this.setState({ showModal: true });
  }
  
  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  saveCurrentUser = (id) => {
    const {users} = this.state
    const currentUser = users.filter( item => item.id === id )
    this.props.setCurrentUser(currentUser[0])
    this.props.setCurrentUserId(id)
  }

  


  render() {

    const {users} = this.state



    return (
      <div className="discovery-section">


        {/* <button className='btn btn-success'
          onClick={this.createNotification('success')}>Success
        </button> */}

        <div>
          <ModalWindow 
            isOpen={this.state.showModal}
            content ={ deleteModalContent(this.handleCloseModal, this.deleteUser )}
            contentLabel="Minimal Modal Example"
          />
        </div>

        <div className="section-wrapper">
          <div className="user-page-header">
                  <h1> User List</h1>
                  <Button
                  name="Add User"
                  onClick={() => {
                    this.addUser()
                  }}
                />
                </div>
          <div className="tabs">
              <div className="tab header">
                <div className="first-name">
                  First name 
                </div>
                <div className="last-name">
                  Last name
                </div>
                <div className="date">
                  Date of birthday
                </div>
                <div className="gender">
                  Gender
                </div>
                <div className="position">
                  Job
                </div>
                <div className="is-active">
                  Is active
                </div>
                <div className="edit-empty">
                
                </div>
                <div className="edit-empty">
                  
                </div>
              </div>

              <div className="tab-body">
                  {users && users.length > 0  && users.map((item, index) => {
                    return (
                      <div
                        className={`tab ${true ? 'selected' : ''}`}
                        key={index}>
                      
                        <div  onClick={() => {
                            this.goToUser()
                            this.saveCurrentUser(item.id)
                            
                        }}>
                          <div className="first-name">
                            {item.first_name}
                          </div>
                          <div className="last-name">
                            {item.last_name}
                          </div>
                          <div className="date">
                            {item.birth_date}
                          </div>
                          <div className="gender">
                            {item.gender}
                          </div>
                          <div className="position">
                            {item.job}
                          </div>
                          <div className="is-active">
                            {item.is_active ?  <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faTimes} /> }
                          </div>
                        </div>
                      
                        <div className="edit" onClick={() => {
                            this.editUser()
                            this.saveCurrentUser(item.id)

                        }}>
                          <div className="icon-wrapper"  >
                            <FontAwesomeIcon icon={faPencilAlt} /> 
                          </div>
                        </div>
                        <div className="edit"  onClick={() => {
                          this.handleOpenModal()

                        }}>
                          <div className="icon-wrapper">
                            <FontAwesomeIcon icon={faTrashAlt} /> 
                          </div>
                        </div>
                      
                      
                      </div>
                    )

                  })
                  }    
              </div>

          
              
              

                  
                </div>
        </div>
      </div>
    )
  }
}

UsersList.propTypes = {
  deviceConnected: PropTypes.bool,
  devicesData: PropTypes.array,
  device: PropTypes.object,
  discoveryToolResponse: PropTypes.object,
  discoveryTXDelay: PropTypes.object,
  discoveryMetalDelay: PropTypes.object,
  startTransmission: PropTypes.func,
  stopTransmission: PropTypes.func,
  getTxMetalDelay: PropTypes.func,
  setTxDelay: PropTypes.func,
  setMetalDelay: PropTypes.func,
};


export default UsersList;