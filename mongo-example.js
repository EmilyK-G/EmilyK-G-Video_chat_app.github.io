const express = require('express');
const app = express();
app.listen(8027);

const mongoose = require('mongoose');
const CONNECTION_STRING = 'mongodb+srv://EmilyKG:Password.123@cluster0.9u4ps.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
const connectionCallback = () => console.log('Connect function has been executed.');

mongoose.connect(CONNECTION_STRING, options, connectionCallback);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const Message = require('./mongo-model');
app.post('/', async (req, res) => {
    const message = new Message({
        username: req.body.username, 
        message: req.body.message
    });
    try {
        const saveResponse = await message.save();
        res.json(saveResponse);
        mongoose.connection.close();
    } catch(error) {
        console.log(error);
        res.json({ error: error });
    }
});

