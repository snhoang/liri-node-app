require("dotenv").config();


var Spotify = require('node-spotify-api');
 
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

  

