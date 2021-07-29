const express = require("express");
const router = express.Router();
const Meeting = require("../models/meetingModel");


router.route('/create').post((req, res) => {

    const username = req.body.username; //from Sidebar.jsx
    const meetingId = req.body.meetingId; //from Sidebar.jsx
    const time = req.body.time; //from Sidebar.jsx
    const newMeeting = new Meeting({
        username,
        meetingId,
        time
    });
    console.log("meeting posted");
    newMeeting.save();
});

router.route('/delete/:id').delete((req, res) => {
    const id = req.params.id;

    Meeting.findByIdAndDelete({_id: id}, (req, res, err) => {
        if(!err) {
            console.log('Item deleted');
        } else {
            console.log(err);
        }
    });
})

router.route("/meetings").get((req, res) => {
    Meeting.find().sort( { time: -1 } )
        .then(foundMeetings => res.json(foundMeetings))
})

module.exports = router;