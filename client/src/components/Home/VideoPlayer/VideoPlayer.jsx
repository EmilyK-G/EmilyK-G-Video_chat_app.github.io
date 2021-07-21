import React, { useContext } from 'react';
import './VideoPlayer.css';

import { SocketContext } from '../../../SocketContext';


const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

  return (
    <div className={"my-4 videoBackground " + (callAccepted && !callEnded ? 'd-inline-flex' : 'container')}>
      {stream && (
        <div className="container px-0">
          <div>
            <h4 className="text-light p-4">{name || 'Name'}</h4>
            <video playsInline muted ref={myVideo} autoPlay className={"py-3 px-md-2 px-0 " + (callAccepted && !callEnded ? 'inCallVideoSize' : 'videoSize')} />
          </div>
        </div>
      )}
      {callAccepted && !callEnded && (
        <div className="container px-0">
          <div>
            <h4 className="text-light p-4">{call.name || 'Name'}</h4>
            <video playsInline ref={userVideo} autoPlay className="inCallVideoSize py-3 px-md-2 px-0" />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
