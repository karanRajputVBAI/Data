const nodemailer = require("nodemailer");



const sendmail = async (req, res)=>
{

    let testAccount = await nodemailer.createTestAccount();
   
    let transporter = nodemailer.createTransport(
        {
        host: "smtp.ethereal.email",
        port: 587,
        //secure: false, // true for 465, false for other ports
        auth: {
            user: 'cortez.parker67@ethereal.email',
            pass: '4EhqUmJxmY1Zrjeu35', 
        }
    }   )


    let info =await transporter.sendMail({
        from: '"KARANSING -.C.- RAJPUT 👻" <karan@gmail.com >', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello qwertyuioplkjhgfdsazxcvbnm,.   ", // plain text body
    html: "<b>!!!!!!__Hello__QWERTYUIOPASDFGHJKLZXCVBNM!!!!!!?</b>", // html body
    })



    console.log("Message sent :%S",info.messageId);
   
    res.json(info);
 

  };

module.exports =sendmail;