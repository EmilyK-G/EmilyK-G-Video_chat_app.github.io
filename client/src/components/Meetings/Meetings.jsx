import React, {useEffect, useState} from "react";
import axios from "axios";
import './Meetings.css';

function Meetings(){
    const [meetings, setMeetings] = useState([{
        meetingId: '',
        username: '',
        time: '',
        _id:''
    }]);
    const [deleted, setDeleted] = useState(false);

    useEffect(() => {
    fetch("/meetings").then((res) => {
            if (res.ok) {
                return res.json();
            }
    }).then((jsonRes) => {
            console.log(jsonRes);
            setMeetings(jsonRes);
        }).then(() => 
            setDeleted(false)
            ).catch((err) => console.log(err));
    }, [deleted]);
    
    function deleteItem(id) {
        axios.delete('/delete/' + id);
        console.log(`deleted item with id ${id}`)
    }

    if (meetings.length >= 1) {
        return <div className="container m-3 p-3 meetingsBackground">
                
                <div> 
                    {meetings.map(meeting => 
                        <div key={meeting._id}  className="container m-3 p-3 mapBackground">
                        <h3>{meeting.username}</h3>
                        <h4>{meeting.time}</h4>
                        <button {...deleted && 'disabled'} className="btn btn-danger" data-id={meeting._id} onClick={()=> {deleteItem(meeting._id); setDeleted(true)}}>Delete Meeting</button>
                        </div>
                        )} 
                </div>
            </div>
    } else {
        return <div className="container p-3 meetingsBackground"><h4>You have 0 meetings</h4></div>
    }
    
}

export default Meetings;