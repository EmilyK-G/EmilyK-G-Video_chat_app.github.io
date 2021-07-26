import React, { useState, useContext } from 'react';
import axios from "axios";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './Sidebar.css';

import { SocketContext } from '../../../SocketContext';

const Sidebar = ({ children }) => {
  const { me, callAccepted, name, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  const [clicked, setClicked] = useState(false);

  
  function postData(e){
    e.preventDefault();
    const newMeeting = {
      username: name,
      meetingId: me,
      time: new Date ().getTime()
    }
    axios.post('http://localhost:5005/create', newMeeting)
  }
    
  
  return (
    
        <form className="d-flex flex-column align-items-center container-sm mt-2 pt-3 p-sm-5" noValidate autoComplete="off">
        
          {children}
          
          <div className="container d-flex flex-column align-content-center my-3">          
            <h5 className="m-3 p-2 accountInfo text-center text-lg-start">Account Info</h5>
            <div className="d-inline-flex flex-column flex-sm-row align-items-center">
              {me === '' ? <button type="button" onClick={() => window.location.reload()} className="btn-light reloadButton m-2 p-2"><cite>Get a meeting ID</cite></button> 
                : <h6 className="m-3 p-2 text-center"><cite title="Meeting Id">Your Meeting Id: {me}</cite></h6>}
              <CopyToClipboard text={me}>
                <button type="button" className="mx-5 btn borderCopyBtn copyBtn btn-dark">
                  Copy
                </button>
              </CopyToClipboard>
            </div>
            <div className="d-flex justify-content-center">
              {callAccepted && !callEnded ? (
                <button type="button" onClick={leaveCall} className="my-4 btn borderBtn btn-danger">Hang Up</button>
              ) : (
                <div className={"my-5 d-flex flex-column content borderCircle " + (clicked ? 'expandCircle' : 'hideBackground')}>
                  { clicked && <input type="text" placeholder="ID to call" aria-label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} autoFocus className='contentTransform form-control align-self-center' maxlength="25"/>}
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
    
  );
};


export default Sidebar;
