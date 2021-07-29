import React, { useContext,} from 'react';
import './VideoPlayer.css';

import { SocketContext } from '../../../SocketContext.jsx';


const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call, setName } = useContext(SocketContext);

  return (
    <div className={"my-4 videoBackground " + (callAccepted && !callEnded ? 'd-inline-flex' : 'container-sm videoContainerWidth')}>
      {stream && (
      <div className="px-0 container-sm">
          <h4 className="text-light p-2 p-sm-4 mt-sm-3 m-sm-2 nameBackground namePosition">{name || 'Name'}</h4>
          <video playsInline muted ref={myVideo} autoPlay className={"py-sm-3 px-md-2 px-0 videoPosition" + (callAccepted && !callEnded ? ' inCallVideoSize' : ' videoSize')} />
          <div className="d-flex justify-content-center">
            <input type="text" placeholder="Your Name Here" aria-label="Name" value={name} onChange={(e) => setName(e.target.value)} autoFocus className={'form-control nameInput align-self-center nameInputPosition' + (callAccepted && !callEnded ? ' shrinkNameInput' : '')} maxLength="15"/>
          </div>
      </div>
      )}
      {callAccepted && !callEnded && (
        <div className="container px-0">
          <div>
            <h4 className="text-light p-2 p-sm-4 mt-sm-3 m-sm-2 nameBackground namePosition">{call.name || 'Name'}</h4>
            <video playsInline ref={userVideo} autoPlay className="inCallVideoSize py-sm-3 px-md-2 px-0" />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
