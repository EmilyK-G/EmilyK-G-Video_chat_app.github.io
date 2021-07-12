const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    }, 
    message: {
        type: String,
        required: true
    }, 
    time: {
        type: Date, 
        default: Date.now
    }
});

module.exports = mongoose.model('Message', MessageSchema);