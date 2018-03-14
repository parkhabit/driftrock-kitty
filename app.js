const mostSold = require("./functions/mostSold.js");
const { mostLoyal } = require("./functions/mostLoyal.js");
const { totalSpend } = require("./functions/totalSpend.js");
const apiCall = require("./functions/apiCall.js");

if (process.argv[2] === "most_sold") {
  apiCall("purchases", mostSold);
} else if (process.argv[2] === "most_loyal") {
  apiCall("purchases", mostLoyal);
} else if (process.argv[2] === "total_spend") {
  apiCall("users", totalSpend, process.argv[3]);
} else {
  console.log(
    "Error, please choose one of the following commands: most_sold, most_loyal, total_spend"
  );
}
