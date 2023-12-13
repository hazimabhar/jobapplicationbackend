const nodemailer = require('nodemailer')

function sendEmail(info){

    let username = info.username
    let password = info.password
    let recipients = info.recipients
    let subject = info.subject
    let message = info.message

    var transporter = nodemailer.createTransport({
        service : 'gmail',
        auth : {
            user:  username,
            pass: password
        }
    })
    
    var mailOptions = {
        from : username,
        to : recipients,
        subject : subject,   
        text : message
    }
    
    transporter.sendMail(mailOptions, function (error, info){
        if(error){
            console.log(error)
        }
        else{
            ("Email Sent "+info.response)
        }
    })

    // return info
}

module.exports =sendEmail
