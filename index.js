const express = require('express')
const app = express()
const sendEmail = require('./sendEmail')
const fileUpload = require('express-fileupload')
const cors = require('cors')

app.use(express.json())
app.use(express.static('public')) //to access the files in public folder
app.use(cors()) // it enables all cors requests
app.use(fileUpload())
 

app.post('/api/v1/email', async (req, res)=>{
 
    // const {username, password, recipients, subject, message} = req.body.data
    // console.log(req.body.data)

    const listRecipients = req.body.recipients.split(',').map(email => email.trim());

    // console.log(req.body.username)
    // console.log(req.body.password)
    // console.log(req.body.recipients)
    // console.log(req.body.subject)
    // console.log(req.body.message)
    // console.log(req.files.fileUpload)
    // console.log(listRecipients)

    for(const element of listRecipients){

        // const resumeFile = fileUpload
        // resumeFile.mv(`${__dirname}/public/${resumeFile.name}`, function (error){
        //     if(error){
        //         console.log(error)
        //         return res.status(500).send({message: error.message})
        //     }
        //     return res.status(200).send({message: resumeFile.name, path: `/${resumeFile.name}`})
        // })

        const info ={
            username: req.body.username,
            password: req.body.password, 
            recipients: element,
            subject: req.body.subject,
            message: req.body.message,
            resume: req.files.fileUpload
        }
 
        console.log(info)
        // sendEmail(info)
    }
    res.json("OK")

})

app.get('/', (req, res) => { 
    res.send('Hello, this is a simple Express.js app!');
  })

const port = 3000; 
app.listen(port, ()=>{
    console.log("Server Start")
})