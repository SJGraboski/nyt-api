/* 0: Foundation */
// NYTURL
// requires
var fs = require('fs');
var prompt = require('prompt');
var request = require('request');
var http = require('http');

// write file
var w_file = "nyt.json";
var userInput = process.argv[2];

/* 1: Prompt */
var NYTURL = "";
prompt.start();
prompt.get(["Search"], function(err, result){
	// define the query time and create url
	var query = result.Search;
	NYTURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query + "&api-key=51d2ee7ce05435e31212f1d25d0cac79:3:74629311";

	// runs the request
	var nytRequest = request
  .get(NYTURL)
  .on('error', function(err) {
    console.log(err)
  })
  .pipe(fs.createWriteStream(w_file));

  // when it finishes, read the file to html
	nytRequest.on('finish', function() {
		fs.readFile('nyt.json','utf-8', function(error, data){
	    if (error) throw error;
	    console.log('callback ok');
	    data = JSON.parse(data);
	    http.createServer(function (request, response) {
		    response.writeHead(200, {'Content-Type': 'text/plain'});
		    response.end(data);
			}).listen(8080);
		});
	})
});