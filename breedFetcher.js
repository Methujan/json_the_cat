const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(`Failed: ${error}`, null);
    }
    
    const data = JSON.parse(body);
    if (data[0]) {
      callback(null, data[0]['description']);
    }
    
    if (!data[0]) {
      callback(`The requested breed: ${breedName} is not found`, null);
    }

  });
};


module.exports = {fetchBreedDescription};
