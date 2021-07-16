import React, {useEffect, useState} from "react";

function Meetings(){
    const [meetings, setMeetings] = useState([{
        username: '',
        time: ''
    }])

    useEffect(() => {
        fetch("/meetings").then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setMeetings(jsonRes));
    })

    return <div>
        <h3>Your meetings</h3>
        <div>
            {meetings.map(meeting => 
                <div>
                <h3>{meeting.username}</h3>
                <h4>{meeting.time}</h4>
                </div>
                )}
        </div>
    </div>
}

export default Meetings;