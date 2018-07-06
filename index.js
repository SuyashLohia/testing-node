var express= require('express');
var app=express();
	app.get( '/', function( req, res){
		res.sendFile(__dirname +'/index.html');
	});

	app.listen(8081,function(){
	console.log("Running at localhost:8081");
	});

