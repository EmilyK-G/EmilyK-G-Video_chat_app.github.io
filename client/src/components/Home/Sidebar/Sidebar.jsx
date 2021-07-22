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


  function postData(e){
    e.preventDefault();
    const newMeeting = {
      username: name,
      meetingId: me
    }
    axios.post('http://localhost:5005/create', newMeeting)
  }
  return (
    <div className="container py-4 sidebarBackground">
        <form className="container my-1 py-4" noValidate autoComplete="off">
          <div className="container">
            <h5>Account Info</h5>
            <div className="d-inline-flex align-items-center">
              <h6><cite title="Meeting Id">Your Meeting Id: {me}</cite></h6>
              <CopyToClipboard text={me}>
                <button type="button" className="mx-5 btn borderCopyBtn btn-dark">
                  Copy
                </button>
              </CopyToClipboard>
            </div>
            <div>
              <TextField className="text-light" label="Name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="d-flex justify-content-center">
              {callAccepted && !callEnded ? (
                <button type="button" onClick={leaveCall} className="my-2 btn borderBtn btn-danger">Hang Up</button>
              ) : (
                <div className={"my-5 d-flex flex-column content borderCircle " + (clicked ? 'expandCircle' : 'hideBackground')}>
                  { clicked && <input type="text" placeholder="ID to call" aria-label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} autoFocus className='contentTransform form-control align-self-center'/>}
                  <div onClick={() => setClicked(true)} className={clicked && 'contentTransform'}>
                    <button type="button" onClick={clicked && function(e) {callUser(idToCall); postData(e)}} className={"btnTransition borderBtn btn btn-dark " + (clicked && "shrinkBtn")}>Call</button>
                  </div>
                  <div className={'closingDiv' + (clicked && ' contentTransform')} onClick={() => setClicked(false)} >
                    <button type="button" className={"btn closingBtn text-light" + (!clicked && 'invisible')}>x</button>
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
