//reqs
var 	express = require('express'),
	bodyParser = require('body-parser'),
	path = require('path'),
	session = require("express-session"),
	colors = require("colors"), 
	root     = __dirname,
	port     = process.env.PORT || 8000;
var app = express();

//set up sessionConfig variable
var sessionConfig = {
	secret:'CookieMonster', // Secret name for decoding secret and such
	resave:false, // Don't resave session if no changes were made
	saveUninitialized: true, // Don't save session if there was nothing initialized
	name:'myCookie', // Sets a custom cookie name
	cookie: {
		secure: false, // This need to be true, but only on HTTPS
		httpOnly:false, // Forces cookies to only be used over http
		maxAge: 3600000
	}
}

//initialize express-session
app.use(session(sessionConfig));

//bodyParser for posting, req.body 
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));



// set up static file paths
app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'bower_components' )));


//enable mongoose
require('./server/config/mongoose.js');
// routes
require('./server/config/routes.js')(app);




app.listen( port, function() {
	console.log( 'server running on port 8000'.underline);
})