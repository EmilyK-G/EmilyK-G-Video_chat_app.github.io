import React from 'react';
import './Home.css';
import Welcoming from './Welcoming/Welcoming.jsx';
import VideoPlayer from './VideoPlayer/VideoPlayer.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';
import Notifications from '../Notifications/Notifications';

function Home(){

    return(
        <div className="container homeBackground">
            <div className="d-flex justify-content-center m-2 pt-5">
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