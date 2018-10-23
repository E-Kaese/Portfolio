const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
const nodemailer = require('nodemailer');
const config = require('./config');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist/Portfolio-Rebuild')));

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/Portfolio-Rebuild/index.html'));
});

//Set Port
const port = process.env.PORT || '8080';
app.set('port', port);

app.post('/email', function(req, res) {
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
        text: "Sent from: " + body.email + "\n\nMessage:\n" + body.message
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

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));