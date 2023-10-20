// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const GenerateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What instructions do you have for installation?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are your contribution guidelines?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do you use your test instructions?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license are you using for your project',
        choices: ['GNU', 'Apache', 'MIT', 'Mozilla', 'Creative Commons', 'None'],
    },
    {
        type: 'input',
        name: 'Github',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('./utils/README-folder/README.md', GenerateMarkdown(data), (err) =>
    err ? console.log(err) : console.log('README made!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        writeToFile(data);
    });
    }


// Function call to initialize app
init();
