import React, {useEffect, useState} from "react";
import axios from "axios";
import './Meetings.css';

var dateFormat = require("dateformat");

function Meetings(){
    const [meetings, setMeetings] = useState([{
        meeting: true,
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
            setMeetings(jsonRes);
        }).then(() => 
            setDeleted(false)
            ).catch((err) => console.log(err));
    }, [deleted]);
    
    function deleteItem(id) {
        axios.delete('/delete/' + id);
    }

    if (meetings.length >= 1) {
       
        return <div className="container d-flex flex-wrap justify-content-around mt-2 p-3 meetingsBackground">
                    
                    {meetings.map(meeting => 
                        <div key={meeting._id}  className="d-inline-flex flex-column m-3 p-3 mapBackground">
                        <h3>{meeting.username}</h3>
                        <h4>{dateFormat(meeting.time, "dddd, mmmm dS, yyyy, HH:MM TT")}</h4>
                        <button className="btn btn-danger" onClick={()=> {deleteItem(meeting._id); setDeleted(true)}}>Delete Meeting</button>
                        </div>
                        )} 
             
            </div>
    } else {
        return <div className="container p-3 meetingsBackground"><h4>You have 0 meetings</h4></div>
    }
    
}

export default Meetings;