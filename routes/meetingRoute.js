const express = require("express");
const router = express.Router();
const Meeting = require("../models/meetingModel");

router.route("/create").post((req, res) => {
    console.log('CREATE');
    const username = req.body.username;
    const id = req.body.id;
    const newMeeting = new Meeting({
        username,
        id
    });

    newMeeting.save();
});

router.route("/meetings").get((req, res) => {
    Meeting.find()
        .then(foundMeetings => res.json(foundMeetings))
})

module.exports = router;

