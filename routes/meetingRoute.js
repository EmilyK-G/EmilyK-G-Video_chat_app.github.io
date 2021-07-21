const express = require("express");
const router = express.Router();
const Meeting = require("../models/meetingModel");

router.route("/create").post((req, res) => {
    const username = req.body.username;
    const id = req.body.id;
    const newMeeting = new Meeting({
        username,
        id,
        time
    });

    newMeeting.save();
});

// router.route("/delete/:id").delete((req, res) => {
//     const id = req.params.id;

//     Meeting.findOneAndDelete({ id: id }, (err, doc) => {
//         if(!err) {
//             console.log("Item deleted");
//             console.log(id);
//             console.log(doc);
//         } else {
//             console.log(err);
//         }
//     });
// });

router.route("/meetings").get((req, res) => {
    Meeting.find()
        .then(foundMeetings => res.json(foundMeetings))
})

module.exports = router;

//window.location.reload();