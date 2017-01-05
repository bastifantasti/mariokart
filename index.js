var express = require('express');
var gsjson = require('google-spreadsheet-to-json');
var detect = require('feature-detect-es6');
var file;
if (detect.all('class', 'spread', 'let', 'arrowFunction')){
    file = 'main.js';
} else {
    file = 'mainOld.js';
}
var data;


var app = express();



app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index',{jsFile:file});
});
app.get('/getData/', function(request, response) {
    gsjson({
        spreadsheetId: '1NW-wDCe35LgUoB5jwbkUhn_pkIbhigvkfeSS5GcUhOQ',
        // other options...
    })
        .then(function(result) {
            console.log(result.length);
            console.log(result);
            data = result;
            response.setHeader('Content-Type', 'application/json');
            response.send(JSON.stringify(data));

        })
        .catch(function(err) {
            console.log(err.message);
            console.log(err.stack);
            data = {msg: err.message};
        });


});
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
