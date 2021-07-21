import React, { useContext } from 'react';
import './Notifications.css';

import { SocketContext } from '../../SocketContext';

const Notifications = () => {
  const { answerCall, call, callAccepted, rejectCall } = useContext(SocketContext);

  return (
    <div>
      {call.isReceivingCall && !callAccepted && (
        <div className= "container">
          <h1>{call.name ? call.name : "Someone"} is calling:</h1>
          <button type="button" className="my-2 btn borderBtnAnswer btn-success"onClick={answerCall}>
            Answer
          </button>
          <button type="button" className="my-2 btn borderBtnAnswer btn-danger"onClick={rejectCall}>
            Reject
          </button>
        </div>
      )}
    </div>
  );
};

export default Notifications;
