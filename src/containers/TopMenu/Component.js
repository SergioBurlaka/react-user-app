import React from 'react';
import PropTypes from 'prop-types';
import './TopMenu.scss';



class TopMenu extends React.Component {
  state = {
    sliderValue: 0,
    device: null,
    serialNumber: '',
    onDiscoveryTool: false,
    txDelay: 0,
    metalDelay: 0,
    metalDelayFirst: true,
    txDelayFirst: true,
    parsedScope: [],
    discoveryToolResponseNoParsed: ''
  };

  componentDidMount() {

  }


  componentWillMount() {
   
  }



  componentWillUnmount() {
  }

  componentWillReceiveProps(next) {
   
  }




  render() {

    return (
      <section className="top-menu-wrapper">
        <div className="time-section">
          <div>
            React User Aplication
          </div>
          <div>
         
          </div>
        </div>         
      </section>
    )
  }
}

TopMenu.propTypes = {
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


export default TopMenu;