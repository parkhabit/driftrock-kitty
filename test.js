const test = require("tape");
const request = require("supertest")(
  "https://driftrock-dev-test.herokuapp.com"
);
const apiCall = require("./functions/apiCall.js");
const mostLoyal = require("./functions/mostLoyal.js");
const mostSold = require("./functions/mostSold.js");
const { addSpendForID } = require("./functions/totalSpend.js");

//testing the api to make sure we are getting a response
test("/users endpoint returns status 200", t => {
  request.get("/users").end((err, res) => {
    t.error(err);
    t.equals(res.status, 200, "should return 200");
    t.end();
  });
});

test("/purchases endpoint returns status 200", t => {
  request.get("/purchases").end((err, res) => {
    t.error(err);
    t.equals(res.status, 200, "should return 200");
    t.end();
  });
});

test("unknown endpoint returns status 404", t => {
  request.get("/random").end((err, res) => {
    t.error(err);
    t.equals(res.status, 404, "should return 404");
    t.end();
  });
});

//add spend based on ID
test("Checks that function addSpendForID returns an amount to two decimal places", t => {
  let actual = addSpendForID(testPurchasesData, "HEI7-W5NW-OO9S-Z382");
  t.equals(typeof actual, "number", "Is a number");
  t.end();
});

//function mostSold
test("Checks that function most sold returns the most sold item", t => {
  let actual = mostSold(testPurchasesData);
  t.equal(typeof actual, "string", "Item returned should be a string");
  t.equal(actual.length != 0, true, "string should not be empty");
  t.equal(
    actual,
    "Synergistic Concrete Pants",
    "Returns Synergistic Concrete Pants, the most sold item"
  );
  t.end();
});

//function changeIdToEmail
test("Check that changeIdToEmail function returns an email address", t => {
  let actual = mostLoyal.changeIdToEmail(testUserData, "KZHR-1H35-2IH8-JXYN");
  const r = new RegExp(/.+@.+\..+/);
  t.equal(typeof actual, "string", "should return a string");
  t.equal(actual.length != 0, true, "string should not be empty");
  t.equal(
    r.test(actual),
    true,
    "Email should contain an @ symbol as well as at least one letter before the at and after."
  );
  t.end();
});

//test data objects
const testUserData = [
  {
    id: "KZHR-1H35-2IH8-JXYN",
    first_name: "Quincy",
    last_name: "Schimmel",
    phone: "186.301.6921 x948",
    email: "schimmel_quincy@ernser.io"
  },
  {
    id: "S27G-8UMJ-LDSL-UOPN",
    first_name: "Henry",
    last_name: "Terry",
    phone: "636-387-6074 x690",
    email: "terry_henry@doyle.io"
  },
  {
    id: "HTNF-7RJY-YFCU-GUN2",
    first_name: "Tierra",
    last_name: "Langosh",
    phone: "570-113-3234 x7287",
    email: "langosh.tierra@erdman.co"
  }
];

const testPurchasesData = [
  {
    user_id: "FFWN-1CKR-X4WU-Q44M",
    item: "Awesome Marble Clock",
    spend: "69.44"
  },
  {
    user_id: "HEI7-W5NW-OO9S-Z382",
    item: "Synergistic Concrete Pants",
    spend: "9.87"
  },
  {
    user_id: "HEI7-W5NW-OO9S-Z382",
    item: "Synergistic Concrete Pants",
    spend: "76.06"
  }
];
