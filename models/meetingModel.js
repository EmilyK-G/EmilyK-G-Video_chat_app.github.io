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
        default: Date.now
    },
    meetingId: {
        type: String
    }
})

const Meeting = mongoose.model("Meeting", MeetingSchema);

module.exports = Meeting;