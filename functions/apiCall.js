const fetch = require("node-fetch");

const apiCall = (option, callback, idOrEmail) => {
  return fetch(`https://driftrock-dev-test.herokuapp.com/${option}`)
    .then(res => res.json())
    .then(res => {
      callback(res.data, idOrEmail);
    })
    .catch(error => {
      console.log(JSON.stringify(error));
    });
};

module.exports = apiCall;
