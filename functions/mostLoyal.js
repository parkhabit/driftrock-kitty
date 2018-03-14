// most_loyal: What is the email address of the most loyal user (most purchases)?
//get details from purchases and find the user_id that appears the most
const apiCall = require("./apiCall.js");

const mostLoyal = purchases => {
  //map over purchases and extract the user_id
  var items = [];
  purchases.map(purchase => {
    items.push(purchase.user_id);
  });

  //give each item a key value pair with number of times it occurs
  let itemAndTally = {};
  for (var i = 0; i < items.length; i++) {
    if (!itemAndTally[items[i]]) {
      itemAndTally[items[i]] = 1;
    } else {
      itemAndTally[items[i]]++;
    }
  }
  //find item which occurs the most amount of times
  let topPurchaserId = Object.keys(itemAndTally).reduce(function(a, b) {
    return itemAndTally[a] > itemAndTally[b] ? a : b;
  });
  apiCall("users", changeIdToEmail, topPurchaserId);
};

//function compares the id to the user data to find the correct email address
const changeIdToEmail = (userData, purId) => {
  let most_loyal = "";
  userData.map(user => {
    if (user.id === purId) {
      most_loyal = user.email;
      console.log(user.email);
    }
  });
  return most_loyal;
};

module.exports = { mostLoyal, changeIdToEmail };
