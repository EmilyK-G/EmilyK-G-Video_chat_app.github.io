import React, { useState, useContext } from 'react';
import axios from "axios";
import { TextField } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './Sidebar.css';

import { SocketContext } from '../../../SocketContext';

const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  const [clicked, setClicked] = useState(false);
  //const [copied, setCopied] = useState(false);


  function postData(e){
    e.preventDefault();
    const newMeeting = {
      username: name,
      id: me
    }
    axios.post('http://localhost:5005/create', newMeeting)
  }
  return (
    <div className="container  sidebarBackground">
        <form className="container my-1 py-4" noValidate autoComplete="off">
          <div className="container">
            <div className="container">
              <h5>Account Info</h5>
              <h6><cite title="Meeting Id">Your Meeting Id: {me}</cite></h6>
              <TextField className="text-light" label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
              <CopyToClipboard text={me}>
                <button type="button" className="mt-5 btn borderBtn btn-dark" fullWidth>
                  <p>Copy Your ID</p>
                </button>
              </CopyToClipboard>
            </div>
            <div className="container">
              {callAccepted && !callEnded ? (
                <button type="button" onClick={leaveCall} className="my-2 btn borderBtn btn-danger">  Hang Up</button>
              ) : (
                <div className={"my-5 content borderCircle " + (clicked ? 'expandCircle' : 'hideBackground')}>
                  { clicked &&
                  <TextField label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />}
                  <div onClick={() => setClicked(true)}>
                    <button type="button" onClick={clicked && function(e) {callUser(idToCall); postData(e)}} className={"btnTransition borderBtn btn btn-dark " + (clicked && "shrinkBtn")}>Call</button>
                  </div>
                  <div className="closingDiv" onClick={() => setClicked(false)} >
                    <button type="button" className={"btn closingBtn text-light " + (!clicked && 'invisible')}>x</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </form>
        {children}
    </div>
  );
};

export default Sidebar;
