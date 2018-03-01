const functions = require('firebase-functions');
const config = require('./config');
const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, '../dist')));

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.post('/email', function(req, res) {
    var body = req.body;
    console.log(body);
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: config.email,
            pass: config.pass
        }
    });

    var params = {
        from: body.email,
        to: config.email,
        subject: 'New submission from ' + body.name,
        text: "Sent from: " + body.email + "\n\nMessage:\n" + body.message
    };

    transporter.sendMail(params, (mailError, mailReponse) => {
            var arrResponse = '';
            if (mailError) {
                arrResponse = { 'message': 'Master, I have failed you...', 'error': mailError };
            } else {
                arrResponse = { 'message': 'Check your mailbox', 'data': mailReponse.accepted };
            }
            res.status(300).send(arrResponse.status);
        }).then(() => console.log('Success'))
        .catch(error => console.error('There was an error while sending the email:', error));
});

exports.widgets = functions.https.onRequest(app);