// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
require('dotenv').config();

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
  console.log(`Server running on localhost: ${port}`);
}
//

//Get route
app.get('/getall', sendData);

function sendData(request, response) {
  console.log(projectData);
  response.send(projectData);
}

//Post add Data
//const data = [];

app.post('/addData', addData);

function addData(request, response) {

  projectData['date'] = request.body.date;
  projectData['temperature'] = request.body.temperature;
  projectData['feelings'] = request.body.feelings;
  response.send(projectData);
  console.log(request.body);
}
