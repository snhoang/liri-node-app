// Dependencies
// read and set environment variables
require("dotenv").config();

// Import the node spotify api NPM package
var Spotify = require('node-spotify-api');

// import the API keys
var keys = require("./keys");

// import the request 
var request = require("request");

// import the moment npm packages
var moment = require("moment");
 
var spotify = new Spotify({
  id: <049fe24238eb4276ae69d013c9af1df2>,
  secret: <f69af998514a430ea7d88ae5950bc5ff>
});
 
spotify
  .search({ type: 'track', query: 'All the Small Things' })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  });

  

