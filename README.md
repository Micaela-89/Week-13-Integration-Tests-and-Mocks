# 'BECOME A QA AUTOMATION' - Week 13 - Integration Tests & Mocks.

This project consists of integration and mocked tests.

## Description
 The goal of this project was to create:
* Integrations tests
* Mocked tests (for the same functions that were tested with the integrations tests)

## Technology stack 
* [Node.js](https://nodejs.org/es/docs/) 
* [Jest](https://jestjs.io/docs/getting-started) for unit and integrations testing 
* [Babel](https://babeljs.io/docs/en/) as compiler to support ECMASCRIPT6
* [Visual Studio Code](https://code.visualstudio.com/) (or any other code editor)

## Installation
**After downloading the project from this repository, the following procedures are needed before tests can be run:**

 (You should use the following commands, either on the git or on the VS console)

* *$ npm install*
* *$ npm init* to create a package.Json
* *$ npm install --save-dev jest*
* *$ npm install --save-dev babel-jest*
* *$ code .* to open the files in the code editor.

    *The package.Json should contain the following script:*

      "scripts": {
            "test": "jest --color",
            "test-coverage": "jest --coverage --color"
            },

## Running the tests

You should use the following commands, either on the git or on the VS terminal:

* *npm run test*
* *npm run test-coverage* to know more about the tests coverage.

## Note about the tests
It is not possible to cover 100% of complexOperations.js without mocking the function, as the "calculateArea" function has a line at the end of it ("default: return '${figure} is not supported'") that it is already declared in the first line of the function, so it cannot be reached. This is the reason why it is impossible to achieve 100% of the test-coverage.

## Author
Micaela Casais

