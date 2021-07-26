const mongoose = require("mongoose");

const MeetingSchema = mongoose.Schema({
    username: {
        type: String
    },
    meeting: {
        type: Boolean,
        default: true
    },
    time: {
        type: Date,
        default: new Date().getTime()
    },
    meetingId: {
        type: String
    }
})

const Meeting = mongoose.model("Meeting", MeetingSchema);

module.exports = Meeting;