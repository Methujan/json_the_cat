const request = require('request');
let breedName = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  }

  const data = JSON.parse(body);
  if (!data) {
    console.log(`The requested breed:${breedName} is not found`);
  
  }

  if (data[0]['description']) {
    console.log(data[0]['description']);
  }
  
});