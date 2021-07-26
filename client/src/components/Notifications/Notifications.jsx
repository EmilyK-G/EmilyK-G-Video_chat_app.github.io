import React, { useContext, useState } from 'react';
import axios from "axios";
import './Notifications.css';

import { SocketContext } from '../../SocketContext';

const Notifications = () => {
  const { answerCall, call, callAccepted, rejectCall } = useContext(SocketContext);
  const [meeting, setMeeting] = useState(false);

  function postData(e){
    e.preventDefault();
    const newMeeting = {
      meeting: meeting,
    }
    axios.post('http://localhost:5005/create', newMeeting)
  }

  return (
    <div className="d-flex justify-content-center">
      {call.isReceivingCall && !callAccepted && (
        <div className= "d-inline-flex m-4 p-4 align-items-center">
          <h1>{call.name ? call.name : "Someone"} is calling:</h1>
          <button type="button" className="m-2 btn borderBtnAnswer btn-success"onClick={function(e) {answerCall(); setMeeting(true); postData(e)}}>
            Answer
          </button>
          <button type="button" className="m-2 btn borderBtnAnswer btn-danger" onClick={function(e) {rejectCall(); setMeeting(false); postData(e)}}>
            Reject
          </button>
        </div>
      )}
    </div>
  );
};

export default Notifications;
