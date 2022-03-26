const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

// The port for the server to run on
require('dotenv').config();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
    extended: true
}));

// post request 
app.use('/api/v1/verify_login_info', require('./routes/verify_login_info'));

const server = require('http').createServer(app);
// start listening with the server on PORT
server.listen(PORT, () => {
    let StartingInfo = `The Server is Listening at port : ${PORT}\n`;
    console.info(StartingInfo);
});
