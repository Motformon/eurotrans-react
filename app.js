const express = require('express');
const app = express();
const request = require('request-promise');
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.post("/api/booking", urlencodedParser , function (req, res) {
	if(!req.body) return res.sendStatus(400);

	const data = JSON.parse(req.body.result);

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


module.exports = app;