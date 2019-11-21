"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = require("nodemailer");
;
const mailProvider = 'gmail';
const mailUser = 'bharathisuthan@gmail.com';
const mailPass = 'kqntdznthpvvxebc';
const MAIL = `<!DOCTYPE html>
<html>
<head>
<style>
#my_name {
	color: red;
    font-size: 25px;
    font-weight: 700;
}
</style>
</head>
<body>

<div id="my_name">My name is Bharathi</div>
<br>


<h2>HTML Image</h2>
<img src="https://www.w3schools.com/html/pic_trulli.jpg" alt="Trulli" width="500" height="333">

<p>I am normal</p>
<p style="color:red;">I am red</p>
<p style="color:blue;">I am blue</p>
<p style="font-size:50px;">I am big</p>

<h2>HTML Links</h2>
<p><a href="https://www.w3schools.com/html/">Visit our HTML tutorial</a></p>

</body>
</html>`;
function Mailer(mail) {
    const transporter = nodemailer.createTransport({
        service: mailProvider,
        auth: {
            user: mailUser,
            pass: mailPass
        }
    });
    const mailOptions = {
        from: 'noreply@ams.com',
        to: mail.to,
        subject: mail.subject,
        html: mail.message || MAIL
    };
    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (err, res) => {
            if (err)
                reject(err);
            resolve(res);
        });
    });
}
exports.Mailer = Mailer;
//# sourceMappingURL=mailer.js.map