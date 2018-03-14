# driftrock-kitty
Tech test for Driftrock using their public API
## The purpose:
The purpose of this test was to produce a command line app which can interact with data held in a public API. This JSON API can be accessed [here](https://driftrock-dev-test.herokuapp.com/)

The script (app.js) is to be opened in the command line and given one argument to determine which of the following methods should be run:
* most_sold: should return the name of the most sold item
* total_spend [email]: should return the total spend of the user with this email address
* most_loyal: What is the email address of the most loyal user (the one who has had the most purchases)

The answer should be output to the Command Line.

## How to run:
`git clone https://github.com/parkhabit/driftrock-kitty.git`
`npm i`
Can run the following commands: 
`node app.js most_sold`
`node app.js total_spend example@email.com`
`node app.js most_loyal`

## Testing:
Run `npm test` to run the test script. 

