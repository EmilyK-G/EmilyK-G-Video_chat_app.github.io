const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://EmilyKG:Password@cluster0.9u4ps.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

app.use("/", require("./routes/meetingRoute"));

app.listen(5005, function() {
    console.log("express server is running on port 5005");
})