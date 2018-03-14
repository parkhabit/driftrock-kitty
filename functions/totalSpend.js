const apiCall = require("./apiCall");

const totalSpend = (users, email) => {
  //map over the users response and get the userID for the correct email
  let userID = "";

  users.map(user => {
    if (user.email === email) {
      userID = user.id;
    }
  });

  //get the data from purchases
  apiCall("purchases", addSpendForID, userID);
  return userID;
};

const addSpendForID = (purchases, userID) => {
  let count = 0;
  purchases.map(purchase => {
    if (purchase.user_id === userID) {
      count = +count + +purchase.spend;
    }
  });
  var num = count.toFixed(2);
  console.log(+num);
  return +num;
};
module.exports = { totalSpend, addSpendForID };
