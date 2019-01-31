const express = require('express');
const app = express();
const request = require('request-promise');
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const urlencodedParser = bodyParser.urlencoded({extended: false});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/api/booking", urlencodedParser , function (req, res) {
	if(!req.body) return res.sendStatus(400);

	const data = req.body;

	const uri = encodeURI(`https://erp.evrotrans.net/search_reis.php?date_search=${data.dateSearch}&place_start=${data.placeStart}&place_end=${data.placeEnd}`);

	const options = { 
		method: 'GET',
		uri
	}

	console.log(options);
	
	request(options)
	.then(function (response) {
		res.end(response);
	})
	.catch(function (err) {
		console.log('Error:', err);
	})

});



app.post('/api/send-boss', urlencodedParser, (req, res) => {
	const data = req.body;
  // async..await is not allowed in global scope, must use a wrapper
async function main(){

		const output = `
			<p>You have a new contact request</p>
			<h3>Contact Details</h3>
			<ul>  
				<li>Name: ${data.name}</li>
			</ul>
			<h3>Message</h3>
		`;

  	// Generate test SMTP service account from ethereal.email
		// Only needed if you don't have a real mail account for testing
		let account = await nodemailer.createTestAccount();

		// create reusable transporter object using the default SMTP transport
		let transporter = nodemailer.createTransport({
			host: "smtp.yandex.ru",
			port: 587,
			secure: false, // true for 465, false for other ports
			auth: {
				user: "Miha26russs@yandex.ru", // generated ethereal user
				pass: "Miha951" // generated ethereal password
			}
		});

		// setup email data with unicode symbols
		let mailOptions = {
			from: '"Nodemailer Contact" <Miha26russs@yandex.ru>', // sender address
			to: "Miha26russ@yandex.ru", // list of receivers
			subject: "Hello ✔", // Subject line
			text: "Hello world?", // plain text body
			html: output // html body
		};

		// send mail with defined transport object
		let info = await transporter.sendMail(mailOptions)

		console.log("Message sent: %s", info.messageId);
		// Preview only available when sending through an Ethereal account
		console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

		// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
		// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
	}

	main().catch(console.error);
  });


module.exports = app;