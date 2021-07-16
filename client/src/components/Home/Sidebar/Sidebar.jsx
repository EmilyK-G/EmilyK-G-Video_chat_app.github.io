import React, { useState, useContext } from 'react';
import axios from "axios";
import { TextField } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Meetings from '../../Meetings/Meetings'
import './Sidebar.css';

import { SocketContext } from '../../../SocketContext';

const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  function postData(e){
    e.preventDefault();
    const newMeeting = {
      username: name,
      id: me
    }
    console.log(me);
    axios.post('http://localhost:5005/create', newMeeting)
  }

  return (
    <div className="container  sidebarBackground">
      <div className="container">
        <form className="container py-4" noValidate autoComplete="off">
          <div className="container">
            <div className="d-grid gap-2 mx-auto">
              <h5>Account Info</h5>
              <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
              <CopyToClipboard text={me}>
                <button type="button" className="my-2 btn btn-light" fullWidth>
                  Copy Your ID
                </button>
              </CopyToClipboard>
            </div>
            <div className="d-grid gap-2 mx-auto">
              <h5>Make a call</h5>
              <TextField label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
              {callAccepted && !callEnded ? (
                <button type="button" onClick={leaveCall} className="my-2 btn btn-light">  Hang Up</button>
              ) : (
                <button type="button" fullWidth onClick={(e) => {callUser(idToCall); postData(e)}} className="my-2 btn btn-light">  Call</button>
              )}
            </div>
            <Meetings />
          </div>
        </form>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
