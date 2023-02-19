// index.js
// This is our main server file

// include express
const express = require("express");

// gets data out of HTTP request body 
const bodyParser = require('body-parser');
// create object to interface with express
const app = express();


// make all the files in 'public' available on the Web
app.use(express.static("public"));


// print info about incoming HTTP request 
// for debugging
app.use(function(req, res, next) {
  console.log(req.method,req.url);
  next();
})

// if no file specified, return the main page
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/public/tiktokpets.html");
});

// gets text out of the HTTP body and into req.body; again not needed in this example
app.use(bodyParser.text());

// This is where the server receives and responds to POST requests
app.post("/videoData", function(req,res, next) {
  console.log("Server recieved a post request at", req.url);
  let choice = req.body;    // user's nickame
  console.log("responding",choice);
  res.send(choice);
 
})

// Need to add response if page not found!
app.use(function(req, res){ res.status(404);   
  res.type('txt'); res.send('404 - File '+req.url+' not   found'); 
});
// end of pipeline specification

// Now listen for HTTP requests
// it's an event listener on the server!
const listener = app.listen(3000, () => {
  console.log("The static server is listening on port " + listener.address().port);
});


