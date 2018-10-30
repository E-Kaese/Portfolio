const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const app = express();
const nodemailer = require('nodemailer');
const config = require('./config');

app.use(cors({origin: true}));
app.post('/', (req, res) => {
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: config.email,
            pass: config.pass
        }
    });

    var body = req.body;

    var params = {
        from: body.email,
        to: config.email,
        subject: 'New submission from ' + body.name,
        text: 'Sent from: ' + body.email + '\n\nMessage:\n' + body.message
    };

    transporter.sendMail(params, (mailError, mailReponse) => {
        var arrResponse = '';
        if (mailError) {
            arrResponse = { 'status': 'Master, I have failed you...', 'error': mailError };
        } else {
            arrResponse = { 'status': 'Check your mailbox', 'data': mailReponse.accepted };
        }
        res.status(200).send(arrResponse.status);
    });
});

exports.email = functions.https.onRequest(app);