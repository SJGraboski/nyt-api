/* 0: Foundation */
// NYTURL
// requires
var fs = require('fs');
var prompt = require('prompt');
var request = require('request');

// write file
var w_file = "nyt.json";
var userInput = process.argv[2];

/* 1: Prompt */
prompt.start();
prompt.get(["Search"], function(err, result){
	console.log(" welcome team");
	console.log("something");
});

function output(article){
	request("http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + article + "&api-key=51d2ee7ce05435e31212f1d25d0cac79:3:74629311", function(error, response, body){
		if (!error && response.statusCode == 200){
			var json = JSON.parse(body);
			console.log()
		}
	})
}

/* 2: Request */

/* 3: Write File */