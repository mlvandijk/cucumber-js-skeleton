const { Before, Given, When, Then } = require('cucumber')
const Belly = require('../../lib/belly');

let belly;

Given('I have {int} cukes in my belly', function (int) {
    belly = new Belly();
    belly.eat(int);
});


When('I wait {int} hour', function (int, callback) {
// Write code here that turns the phrase above into concrete actions
callback(null, 'pending');
});

Then('my belly should growl', function (callback) {
// Write code here that turns the phrase above into concrete actions
callback(null, 'pending');
});