const express = require('express')
let route = express.Router()

route.post('/',
    async function (req, res) {
        console.log(req.body);
        let response = null;
        let toBeAuthinticated = {
            email: req.body.email,
            password: req.body.password
        };


        // Dummy Logic
        let email = 'maruf@gmail.com';
        let password = 'password123';

        // email not found in database
        if (email !== toBeAuthinticated.email) {
            response =
            {
                status: 304,
                state: 'EMAIL_NOT_FOUND'
            }
        }
        // if password doesn't match
        else if (password !== toBeAuthinticated.password) {
            response =
            {
                status: 304,
                state: 'PASS_NOT_MATCHED'
            }
        }
        // user verified
        else {
            response =
            {
                status: 200,
                state: 'PASS_NOT_MATCHED',
                user: toBeAuthinticated,
            }

        }
        //
        res.send(response);
    }
);

module.exports = route
