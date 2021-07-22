import React from 'react';
import './Home.css';
import Welcoming from './Welcoming/Welcoming.jsx';
import VideoPlayer from './VideoPlayer/VideoPlayer.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';
import Notifications from '../Notifications/Notifications';

function Home(){

    return(
        <div className="container">
            <div className="d-flex m-2 p-3">
                <Welcoming/>
            </div>
            <VideoPlayer />
            <Sidebar>
                <Notifications />
            </Sidebar>
        </div>
        
    )
}

export default Home