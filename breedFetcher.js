const request = require('request');

const fetchBreedDescription = (catsBreed, callbackFunc) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${catsBreed}`, (error, message, body) => {
    //Perfect Case - no error
    if (!error) {
      let information = JSON.parse(body);
      //console.log(information);

      //Edge Case - Breed not found
      if (information.length === 0) {
        return callbackFunc(`Sorry! The Breed does not have a match...`, null);
      } else {
        return callbackFunc(error, information[0].description);
      }
    } else {
      return callbackFunc(error, 'Opppsss...Try again!');
    }
  });
};

module.exports = { fetchBreedDescription };