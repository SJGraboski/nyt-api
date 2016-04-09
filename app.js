/* 0: Foundation */

// requires
var fs = require('fs');
var prompt = require('prompt');
var request = require('request');

// write file
var w_file = "nyt.json";

/* 1: Prompt */

/* 2: Request */

request
  .get('http://www.omdbapi.com/?t=goodfellas&tomatoes=true')
  .on('error', function(err) {
    console.log(err)
  })
  .pipe(fs.createWriteStream(w_file));

/* 3: Write File */