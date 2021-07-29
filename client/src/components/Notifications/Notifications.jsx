import React, { useContext } from 'react';
import './Notifications.css';

import { SocketContext } from '../../SocketContext.jsx';

const Notifications = (props) => {
  const { answerCall, call, callAccepted, rejectCall } = useContext(SocketContext);


  return (
    <div className="d-flex justify-content-center">
      {call.isReceivingCall && !callAccepted && (
        <div className= "d-inline-flex m-4 p-4 align-items-center">
          <h1>{call.name ? call.name : "Someone"} is calling:</h1>
          <button type="button" className="m-2 btn borderBtnAnswer btn-success" onClick={function(e) {answerCall()}}>
            Answer
          </button>
          <button type="button" className="m-2 btn borderBtnAnswer btn-danger" onClick={function(e) {rejectCall()}}>
            Reject
          </button>
        </div>
      )}
    </div>
  );
};

export default Notifications;
