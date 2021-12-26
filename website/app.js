/* Global Variables */

//const res = require('express/lib/response');

const baseURL = 'http://api.openweathermap.org/data/2.5/weather?';
const zipcode = 'zip=2700';
const country = ',AT'; //Wiener Neustadt AT
const units = '&units=metric';
const OpenWeather_Key = '&appid=8b9a0ed2fb75b9fbab6a13540270e4a6';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.toLocaleString('en-GB');

const buttonSubmit = document.getElementById('generate');

//Post New Data
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
    console.log(newData);
    //return newData;
  } catch (error) {
    console.log('error', error);
  }
};

//Get Data and fill Layoput
const retrieveData = async (url = '') => {
  const request = await fetch(url);
  try {
    const allData = await request.json();
    console.log(allData);

    let length = allData.length - 1;

    document.getElementById('date').innerHTML = allData[length].date;
    document.getElementById('temp').innerHTML = allData[length].temperature;
    document.getElementById('content').innerHTML = allData[length].feelings;
  } catch (error) {
    console.log('error', error);
  }
};

//Get wether Data
function getwetherdata(zipcode, country) {
  getTemperature(baseURL, zipcode, country, OpenWeather_Key, units);
}

const getTemperature = (baseURL, zipcode, country, apiKey, units) => {
  console.log(baseURL + 'zip=' + zipcode + ',' + country + apiKey + units);
  const endpoint = baseURL + 'zip=' + zipcode + ',' + country + apiKey + units;
  //const endpoint =
  //  'api.openweathermap.org/data/2.5/weather?zip=2700,AT&appid=8b9a0ed2fb75b9fbab6a13540270e4a6';

  const loadData = async () => {
    try {
      const res = await fetch(endpoint);
      console.log(res.ok);
      const data = await res.json();
      console.log(data);
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  loadData().then((data) => {
    console.log('data', data);

    let temp = `${data.main.temp} degrees`;

    let feeling = document.getElementById('feelings').value;

    postData('/addData', {
      temperature: temp,
      date: newDate,
      feelings: feeling,
    }).then(retrieveData('/getall'));
  });
};

//retrieveData('/getall');
//getwetherdata();
function postButtonSubmit() {
  let zip = document.getElementById('zip').value;
  let country = document.getElementById('country').value;

  getwetherdata(zip, country);
}

buttonSubmit.addEventListener('click', postButtonSubmit);

//postGet();
