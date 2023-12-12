const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

app.use(express.json());

// let username = 'hazim.azahar@beans.com.my'
// let password = 'afag ebhg wwzb spie'
// let recipients = []
// let subject = 'Test'
// let message = 'Hello'

// var transporter = nodemailer.createTransport({
//     service : 'gmail',
//     auth : {
//         user:  username,
//         pass: password
//     }
// })

// var mailOptions = {
//     from : username,
//     to : 'hazimabhar123@gmail.com',
//     subject : subject,
//     text : message
// }

// transporter.sendMail(mailOptions, function (error, info){
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log("Email Sent "+info.response)
//     }
// })

app.post('/api/v1/email', async (req, res)=>{

    const {username, password, recipients, subject, message} = req.body

    const info ={
        username: username,
        password: password,
        recipients: recipients,
        subject: subject,
        message: message
    }

    res.json(info)
})

app.get('/', (req, res) => { 
    res.send('Hello, this is a simple Express.js app!');
  });

const port = 3000; 
app.listen(port, ()=>{
    console.log("Server Start")
})