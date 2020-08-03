var request = require('request');

console.log("Sunset in Hawaii is at...");
request('https://jsonplaceholder.typicode.com/todos', function(error, response, body){
    if(!error && response.statusCode == 200){
        var parsedData = JSON.parse(body);
        console.log(parsedData);
    }
});