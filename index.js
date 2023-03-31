// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'projectTitle'
    },
    {
        type: 'input',
        message: 'Please provide a description for your project:',
        name: 'bio'
    },
    {
        type: 'input',
        message: 'Provide examples and instructions for use of project:',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Provide examples and instructions for use of project:',
        name: 'usage'
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
