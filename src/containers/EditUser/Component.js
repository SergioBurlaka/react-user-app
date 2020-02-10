import React  from 'react';
import PropTypes from 'prop-types';
import './EditUser.scss';
import Button from "../../components/Button/index";
import TextareaAutosize from 'react-autosize-textarea';
import ApiService from "../../ApiService/index";
import { NotificationManager} from 'react-notifications';


import DatePicker from "react-datepicker";

import routes from "../../rootRoutes/routes";




class EditUser extends React.Component {
  state = {
    sendMethod:"POST",
    editUser: {
      id: `f${(+new Date()).toString(16)}`,
      first_name: '',
      last_name: '',
      birth_date: '1993-06-23',
      gender: 'male',
      job: '',
      biography: '',
      is_active: true,
    },

    fieldsToValidate:[
      {
        propertyName: 'first_name',
        untouched: true,
        errorMessage: '',
        valid: false,
      },
      {
        propertyName: 'last_name',
        untouched: true,
        errorMessage: '',
        valid: false,
      },
      {
        propertyName: 'job',
        untouched: true,
        errorMessage: '',
        valid: false,
      },
      {
        propertyName: 'biography',
        untouched: true,
        errorMessage: '',
        valid: false,
      },

    ]

  };

  isFormReadyToSubmit = () =>{
    const { fieldsToValidate} = this.state
    return fieldsToValidate.every(item=>item.valid)
  }

  sendUser = () =>{
    const { editUser, sendMethod} = this.state
    const isUserDataValid = this.isFormReadyToSubmit()


    if(isUserDataValid && sendMethod === "POST"){

      ApiService.addUser(editUser)
      .then(res => {
        this.createNotification('success', 'New user was added')
        return
      })
      .catch(err => {
        this.createNotification('error',err, 'New user wasn`t added')
        return
      })

      return
    }

    if(isUserDataValid && sendMethod === "PUT"){

      ApiService.editUser(editUser)
      .then(res => {
        // console.log("success PUT ", res.data)
        this.createNotification('success', 'User was edited successfully')
        return
      })
      .catch(err => {
        // console.log("catch err PUT ", err)
        this.createNotification('error', err,'User has not been edited')
        return
      })
      return

    }

  }



  createNotification = (type, message, title) => {
   
    switch (type) {
    
      case 'success':
        NotificationManager.success(`Success! ${message}`, title, 2000);
        break;
    
      case 'error':
        NotificationManager.error(` ${message}`, title, 2000, () => {
        });
        break;
      default:
          break;
    }
  };


  componentDidMount() {
    if(this.props.currentUser){
      this.setState({ 
        editUser: this.props.currentUser,
        sendMethod: "PUT"
       });
    }
  }


  getErrorMessage = (propertyName, valueOfProperty) =>{
    const { fieldsToValidate} = this.state
    const currentField = fieldsToValidate.filter( item => item.propertyName === propertyName)
    return currentField[0][valueOfProperty]
  }



  onSubmitValidation = (cb) =>{
    const {editUser, fieldsToValidate} = this.state

    fieldsToValidate.forEach( (item) =>{
      const currentpropertyName = item.propertyName;
      const currentFieldValue = editUser[currentpropertyName]
      this.validationByPropertyName (item, currentFieldValue )
    })
    this.setState({fieldsToValidate: fieldsToValidate}, ()=>{
     cb()
    });

  }


  validationByPropertyName = (item, fieldValue) =>{
    const propertName = item.propertyName
    const isFieldEmty = this.validateEmptyField(fieldValue)
    let errorMessage = isFieldEmty ? this.errors.required : ''

    let isFieldTooLong

    if( !isFieldEmty && ( propertName === 'job' || propertName === 'last_name' || propertName === 'first_name') ){
       isFieldTooLong = this.validateLenght(fieldValue, 256)
       errorMessage = isFieldTooLong ? this.errors.maxLength_256 : ''
    }

    if( !isFieldEmty && propertName === 'biography' ){
      isFieldTooLong = this.validateLenght(fieldValue, 1024)
      errorMessage =  isFieldTooLong ? this.errors.maxLength_1024 : ''
    }

    item.untouched = false
    item.errorMessage = errorMessage
    item.valid = !isFieldTooLong && !isFieldEmty


  }




  onChangeGender = (event) =>{
    const {editUser} = this.state
    editUser.gender = event.target.value;
    this.setState({editUser: editUser});
  }




  errors = {
    maxLength_256: 'Field must contain less than 256 characters',
    maxLength_1024: 'Field must contain less than 1024 characters',
    required: 'Field is required',
  } 

  stopPropagationHandler = (event) =>{
    event.persist(); 
    event.stopPropagation(); 
    event.nativeEvent.stopImmediatePropagation();
  
  }

  onActiveChange = (event) =>{

    this.stopPropagationHandler(event)

    const {editUser} = this.state
    const isActiveCurrentValue = editUser.is_active
    editUser.is_active = !isActiveCurrentValue;
    this.setState({editUser: editUser});
    return false
  }


  validateLenght = (string, maxLength) =>{
    return string.length > maxLength
  }

  validateEmptyField = (string) =>{
    return string.length === 0
  }



  onChangeField = (event, fieldPropertyName)=>{
    const {editUser} = this.state
    const newValue = event.target.value
    editUser[fieldPropertyName] = newValue

    this.setState({editUser: editUser}, () =>{
      this.onSubmitValidation( ()=>{})
    });
  }


  setUserBirthday = (string) =>{
    return new Date(string)
  }



handleChangeBirthday = (date) =>{
  const {editUser} = this.state
  editUser.birth_date = date;
  this.setState({editUser: editUser});
}





  goToUsersList = () => {
    const history =  this.props.history
     history.push(routes.users_list);
   }



  render() {

    const {editUser, fieldsToValidate} = this.state


    return (
      <div className="edit-user-section">
        <div className="edit-user-container">
            <div className="edit-user-header">
                <h1>Edit User</h1>
                <Button
                name="To Users List"
                onClick={() => {
                  this.goToUsersList()
                }}
              />
            </div>


            <div className="edit-user-body">
              <form>
                <div className="name-wrapper">
                    <label>
                      First name:
                      <input type="text" name="name"
                        value={editUser.first_name} 
                        className={`${ this.getErrorMessage('first_name','untouched') ? '': this.getErrorMessage('first_name','valid') ? "valid" : "invalid"}`} 
                        onChange={ event => {this.onChangeField(event, 'first_name')}}/>
                      <div className="invalid-feedback">
                        {this.getErrorMessage('first_name','errorMessage')}
                      </div>
                    </label>
                    <label>
                      Last name:
                      <input type="text" name="name" 
                        value={editUser.last_name} 
                        className={`${ this.getErrorMessage('last_name','untouched') ? '': this.getErrorMessage('last_name','valid') ? "valid" : "invalid"}`} 
                       onChange={ event => {this.onChangeField(event, 'last_name')}}/>
                      <div className="invalid-feedback">
                        {this.getErrorMessage('last_name','errorMessage')}
                      </div>
                    </label>
                </div>

                <div className="date-picker">
                    <label>
                      Date of birthday:

                      <div className="date-picker-container">
                        <DatePicker
                          dateFormat="yyyy-MM-dd"
                          selected={this.setUserBirthday(editUser.birth_date)}
                          onChange={this.handleChangeBirthday}
                        />
                      </div>
                    
                    </label>
                  
                  <label>
                    Gender:
                    <select value={editUser.gender} onChange={this.onChangeGender}>
                      <option value="male">male</option>
                      <option value="female">female</option>
                    </select>
                  </label>
                </div>

                <label className="profecion">
                  Profession:
                  <input type="text" name="name" 
                      value={editUser.job} 
                    className={`${ this.getErrorMessage('job','untouched') ? '': this.getErrorMessage('job','valid') ? "valid" : "invalid"}`} 
                    onChange={ event => {this.onChangeField(event, 'job')}}/>
                  <div className="invalid-feedback">
                  {this.getErrorMessage('job','errorMessage')}
                  </div>
                </label>

                <label className="biography">
                  Biography:
                  <TextareaAutosize
                    value={editUser.biography} 
                    onChange={ event => {this.onChangeField(event, 'biography')}}
                    className={`${ this.getErrorMessage('biography','untouched') ? '': this.getErrorMessage('biography','valid') ? "valid" : "invalid"}`} 
                  />    
                    <div className="invalid-feedback">
                      {this.getErrorMessage('biography','errorMessage')}
                    </div>
                </label>

                <label className="is-active">
                  Is active:
                  <input
                    name="isGoing"
                    type="checkbox"
                    checked={editUser.is_active}
                    onChange={ event => {this.onActiveChange(event)}
                      }/>
                </label>   

                <div className="submit-section">
                  <Button
                    name="Submit"
                    type="button"
                    onClick={()=>{
                      this.onSubmitValidation(this.sendUser)
                    } }
                  />
                </div>             
              </form>
            </div>
        </div>
      </div>
    )
  }
}

EditUser.propTypes = {
  deviceConnected: PropTypes.bool,
 
};


export default EditUser;