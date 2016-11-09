var express = require('express');
var bodyParser = require('body-parser');

// Controllers
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

// Creates the server
var app = express();

app.use(bodyParser.json());

// Uses the function 'addHeaders' from the middleware.js file
app.use(middleware.addHeaders);

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesType);
app.get('/family', mainCtrl.getFamily);
app.get('/family/:gender', mainCtrl.getFamilyGender);
app.get('/restaurants', mainCtrl.getRestaurants);

// Start up the Server
app.listen(3030, function() {
    console.log('Server is now live on port 3030!');
})