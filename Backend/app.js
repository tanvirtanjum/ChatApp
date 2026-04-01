// <-- Imports -->
const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');

// <-- Configuration --> 
dotenv.config();

const app = express();
app.use('/uploads', express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('trust proxy', 1);
app.use(cors({origin : '*'}));

// <-- Import Routes -->
const users = require("./routes/user.route");


// <-- Configure Routes -->
app.use('/api/users', users);

// <-- -->
app.listen(process.env.SERVER_PORT, () => {
    console.log("Server Started at Port: http://localhost:" + process.env.SERVER_PORT);
});