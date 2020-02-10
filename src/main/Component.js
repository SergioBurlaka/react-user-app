import React from 'react';
import PropTypes from "prop-types";
import {Switch, Route} from 'react-router-dom';
import rc from '../rootRoutes/routes';
import EditUser from '../containers/EditUser';
import UsersList from '../containers/UsersList';
import TopMenu from '../containers/TopMenu';
import User from '../containers/User';
import "./ControlPanel.scss";
import {NotificationContainer} from 'react-notifications';




class ControlPanel extends React.Component {

  componentDidMount() {
    this.goToUsersList()
  }

  goToUsersList = () => {
    const history =  this.props.history
     history.push(rc.users_list);
   }

  render() {


    return (
      <div >
        <NotificationContainer/>
            <TopMenu/>
          <div className="control-panel">
            <Switch>
                <Route exact  component={UsersList} path={rc.users_list}/>
                <Route component={EditUser} path={rc.edit_user}/>
                <Route component={User} path={rc.user}/>
            </Switch>
          </div>
      </div>
    )
  }
}

ControlPanel.propTypes = {
  inProcess: PropTypes.bool,
  getDevicesInfo: PropTypes.func
};

export default ControlPanel;