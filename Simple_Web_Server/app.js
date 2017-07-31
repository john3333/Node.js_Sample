var express = require('express');
var app = express();

// Simple RESTful API - GET
var web_hit_counnter=0;
app.get(
	'/check',
	function (request, response){
		web_hit_counnter++;
		console.log(`${web_hit_counnter} Hits.`);
		response.write("<h1>Hello world!</h1>","utf-8");
		response.write(`<h2>You are the ${web_hit_counnter}th visitor.</h2>`,"utf-8");
		response.end("<h3>[END]</h3>","utf-8");
  		//response.send(`<h1>Hello world!</h1><br><h2>You are the ${web_hit_counnter}th visitor.</h2>`);
  		//response.json( { "message": "Hello world!" } );  
	}
);

// Web Server Document Root Directory.
app.use('/', express.static( __dirname + '/public'));

var port=8080;
app.listen(
	port,	 
	function(){
		console.log( `Web Server is running on port ${port}.` );		
	}
);