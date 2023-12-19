const nodemailer = require('nodemailer')

function sendEmail(info){

    let username = info.username
    let password = info.password
    let recipients = info.recipients
    let subject = info.subject
    let message = info.message
    let resume = info.resume

    // let emailAttachments = []

    // resume.forEach(attachments)

    // function attachments(file){
    //     const {name,data,size,encoding,tempFilePath,truncated,mimetype,md5,mv} = file
    //     console.log(file)
    //     emailAttachments = file
    // }

    // console.log(resume)
    const attachments = resume.map((file)=>{
        return{filename: file.name, content: file.data, encoding: file.encoding, contentType: file.mimetype, size: file.size}
    })
    // console.log(attachments)
    // console.log(emailAttachments)
    let sender = nodemailer.createTransport({
        service : 'gmail',
        auth : {
            user:  username,
            pass: password
        }
    })
    
    let mailOptions = {
        from : username,
        to : recipients,
        subject : subject,   
        text : message,
        attachments: attachments
        // attachments:{
        //     filename: resume.name,
        //     content: resume.data,
        //     encoding: resume.encoding,
        //     size: resume.size,
        //     contentType: resume.mimetype,
        // }
    }
    
    // console.log(mailOptions) 
    sender.sendMail(mailOptions, function (error, info){
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
