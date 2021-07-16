import React, { useContext } from 'react';
import './VideoPlayer.css';

import { SocketContext } from '../../../SocketContext';


const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

  return (
    <div className="container my-4  videoBackground">
      {stream && (
        <div className="container">
          <div>
            <h4 className="text-light p-4">{name || 'Name'}</h4>
            <video playsInline muted ref={myVideo} autoPlay className="videoSize  py-3 px-2" />
          </div>
        </div>
      )}
      {callAccepted && !callEnded && (
        <div className="container videoBackground">
          <div>
            <h4>{call.name || 'Name'}</h4>
            <video playsInline ref={userVideo} autoPlay className="videoSize" />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
