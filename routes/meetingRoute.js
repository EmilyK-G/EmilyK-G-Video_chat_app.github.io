const express = require("express");
const router = express.Router();
const Meeting = require("../models/meetingModel");


router.route('/create').post((req, res) => {
    const username = req.body.username;
    const meetingId = req.body.meetingId;
    const time = req.body.time;
    const newMeeting = new Meeting({
        username,
        meetingId,
        time
    });

    newMeeting.save();
});

router.delete('/delete/:id', (req, res) => {
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
    Meeting.find()
        .then(foundMeetings => res.json(foundMeetings))
})

module.exports = router;

//window.location.reload();