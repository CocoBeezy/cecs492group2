'use strict';

var nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'shredfitmail@gmail.com',
        pass: 'shredfit9000'
    }
});

// send mail with defined transport object
exports.sendMail = function(email){
    // NB! No need to recreate the transporter object. You can use
    // the same transporter object for all e-mails

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: 'ShredFit Enterprise <shredfitmail@gmail.com>', // sender address
        to: email, // list of receivers
        subject: 'Welcome to ShredFit', // Subject line
        text: 'Welcome to ShredFit.\n\n' + 
              'Perhaps we\'ll use this space for registration validation in the future.', // plaintext body
        html: '' // html body
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }else{
            console.log('Message sent: ' + info.response);
        }
    });
};