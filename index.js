var fs = require('fs');
var nodemailer = require('nodemailer');

fileWrite();

var transporter = nodemailer.createTransport({
	service: 'gmail',
	secure: true,
	port: 25,
	auth: {
		user: 'bugtestnode@gmail.com',
		pass: "Bn5336953369"
	}
});

var HelperOptions = {
	from: '"Denis" <bugtestnode@gmail.com',
	to: 'bugname26@gmail.com',
	subject: 'Hello World',
	text: 'test'
};
transporter.sendMail(HelperOptions, (error, info) => {
	if(error){
		return console.log(error);
	}
	console.log("Sent");
});

function fileWrite(){
	fs.appendFileSync("file.txt", "\r\n" + "Message");
}
