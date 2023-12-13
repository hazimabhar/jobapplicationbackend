const express = require('express');
const app = express();
const sendEmail = require('./sendEmail');

app.use(express.json());

app.post('/api/v1/email', async (req, res)=>{

    const {username, password, recipients, subject, message} = req.body

    const listRecipients = recipients.split(',').map(email => email.trim());

    for(let i = 0; i < listRecipients.length; i++){

        const info ={
            username: username,
            password: password, 
            recipients: listRecipients[i],
            subject: subject,
            message: message
        }
        sendEmail(info)
    }
    res.json(listRecipients);
})

app.get('/', (req, res) => { 
    res.send('Hello, this is a simple Express.js app!');
  });

const port = 3000; 
app.listen(port, ()=>{
    console.log("Server Start")
})