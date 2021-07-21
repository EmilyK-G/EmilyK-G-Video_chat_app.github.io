import React, {useEffect, useState} from "react";
import axios from "axios";
import './Meetings.css';

function Meetings(){
    const [meetings, setMeetings] = useState([{
        id: '',
        username: '',
        time: ''
    }]);

    useEffect(() => {
    fetch("/meetings").then(res => {
            return res.json()
    }).then(jsonRes => {
            setMeetings(jsonRes);
            
        }).then( console.log(meetings));
    },[]);
    
    function deleteItem(id) {
        axios.delete('/delete/' + id);
    }

    if (typeof meetings.id === 'undefined') {
        return <div className="container p-3 meetingsBackground"><h4>You have 0 meetings</h4></div>
    } else {
        return <div className="container m-3 p-3 meetingsBackground">
                
                <div> 
                    {meetings.map(meeting => 
                        <div key={meeting.id}  className="container m-3 p-3 mapBackground">
                        <h3>{meeting.username}</h3>
                        <h4>{meeting.time}</h4>
                        <button className="btn btn-danger" data-id={meeting.id} onClick={()=>deleteItem(meeting.id)}>Delete Meeting</button>
                        </div>
                        )} 
                </div>
                
                    
            </div>
    }
    
}

export default Meetings;