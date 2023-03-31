// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')


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
        message: 'List your collaborators with a comma and space included:',
        name: 'collaborators'
    },
    {
        type: 'input',
        message: 'List your third-party assets with a comma and space included:',
        name: 'thirdParty'
    },
    {
        type: 'input',
        message: 'Please type which license you used:',
        name: 'license'
    },
    
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err)=>{
        if (err){
            console.log(err);
        }
        else{
            console.log('Task completed.');
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response)=>{
            const writeme = generateMarkdown(response);
            writeToFile('README.md', generateMarkdown);
        })
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();
