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

// import fs package to read and write file system
var fs = require("fs");

// spitify API cliend using out client id and secret 
var spotify = new Spotify(keys.spotify);

// create a function to get the artists
var getArtistsNames = function(artist){
  return artist.name;
}

// Spotify search Function

var LinkMySpotify = function(songName){
  if(songName === undefined) {
    songName = "All the Small Things"
  }

  spotify.search(
    {
      type:"track",
      query: songName
    },
    // create a function to catch the error
    function(err, data) {
      if(err){
        console.log("There is an error in your request: " + err);
        return;
      }

      // variable for the songs on the list
      var songs = data.tracks.items;
      // for loop for displaying the details of the song
      for(var i = 0; i < songs.length; i++){
        console.log(i);
        console.log("artist(s): " + songs[i].artists.map(getArtistNames));
        console.log("song name: "+ songs[i].name);
        console.log("preview song:" + song[i].preview_url);
        console.log("album: " + songs[i].album.name);
        console.log("----------------------------------------------------");
      }
    }
  );
};

var linkMyBands = function(artist) {
  var queryURL = "";

  request(queryURL, function(error, response, body){
    if (!error && response.statusCode === 200) {
      var jsonData = JSON.parse(body);

      if(!jsonData.length) {
        console.log("No results found " + artist);
        return;
      }
      console.log("Upcoming concerts for " + artist + ":");

      for(var i = 0; i < jsonData.length; i++) {
        var show = jsonData[i];

        console.log(
          show.venue.city +
          "," + 
          (show.venue.region || show.venue.country) + 
          "at" + 
          show.venue.name +
          " " + 
          moment(show.datetime).format("MM/DD/YYYY")
        );
      }
    }
  });
};

