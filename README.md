### Install node.js

On Mac OS, using homebrew: `brew install node`

To verify that you have node.js installed properly, type `node -v` in a terminal.
This should return the node version number.


### Install npm

We will use npm as our package manager. It should be installed in the same location as node.js.

To verify that npm is installed, type `npm -v` in a terminal.
This should return the npm version number.


### Install Cucumber-js

Cucumber-js is available as an npm package: `npm install cucumber`.

This will create a lockfile called `package-lock.json`. You should commit this file.

### Add features

Add a directory called `features`.
Add your `.feature` files here.

### Add step definitions

By convention, step definitions are stored in the `features/step-definitions` directory.
Add a directory called `step-definitions` to your `features` directory.
Add your `belly-steps.js` file here.

### Running

Run the tests with `./node_modules/.bin/cucumber-js`

