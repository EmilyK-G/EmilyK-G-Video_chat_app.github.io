const mongoose = require("mongoose");

const MeetingSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    meeting: {
        type: Boolean,
        default: true
    },
    time: {
        type: Date,
        default: Date.now
    },
    id: {
        type: String
    }
})

const Meeting = mongoose.model("Meeting", MeetingSchema);

module.exports = Meeting;