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
app.use('/api/v1/get-users', require('./routes/get_users'));
app.use('/api/v1/add-user', require('./routes/add_user'));
app.use('/api/v1/get-posts', require('./routes/get_fd_posts'));
app.use('/api/v1/get-bd-posts', require('./routes/get_bd_posts'));
app.use('/api/v1/add-post', require('./routes/add_financial_donation_post'));
app.use('/api/v1/add-bd-post', require('./routes/add_blood_donation_post'));
app.use('/api/v1/send-message', require('./routes/send_message'));
app.use('/api/v1/get-messages', require('./routes/get_messages'));

const server = require('http').createServer(app);
// start listening with the server on PORT
server.listen(PORT, () => {
    let StartingInfo = `The Server is Listening at port : ${PORT}\n`;
    console.info(StartingInfo);
});
