// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 3000;
const server = app.listen(port, listening);
function listening() {
    console.log(`running on localhost: ${port}`);
};

//Get route
app.get('/all', sendData);

function sendDate(request, response) {
    response.send(projectData);
};

//Post route
app.post('/add', callBack);

function callBack(request, response) {
    response.send('Post received');
};

//Post add Data
const data = [];

app.post('/addData', addData);

function addData(request, response) {
    data.push(request.body);
};
