/* Global Variables */

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

function postGet() {
  postData('/addData', { date: newDate }).then(function (data) {
    retrieveData('/all');
  });
}

postGet();