/* Global Variables */

const res = require('express/lib/response');

const baseURL = 'api.openweathermap.org/data/2.5/weather?';
const cityID = 'id=2761333'; //Wiener Neustadt AT
const units = '&units=metric';


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

//Post
const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log('error', error);
  }
};

//Get
const retrieveData = async (url = '') => {
  const request = await fetch(url);
  try {
    const allData = await request.json();
  } catch (error) {
    console.log('error', error);
  }
};

//Get openwether API data

function performwetherapi(e) {
  getTemperature(baseURL, cityID, units, OpenWeather_Key);
}

const getTemperature = async (baseURL, cityID, units, apiKey) => {
  const response = await fetch(baseURL + cityID + units + apiKey);

  try {
    const wetherdata = await response.json();
    console.log(wetherdata);
  } catch (error) {
    console.log('error', error);
  }
};

function postGet() {
  performwetherapi();
  const temperature = wetherdata[0].temp;
  postData('/addData', {
    temperature: temperature,
    date: newDate,
    userrespone: response,
  }).then(function (Data) {
    retrieveData('/getall');
  });
}

postGet();
