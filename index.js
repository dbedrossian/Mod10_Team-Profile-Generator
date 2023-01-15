const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');

const employee = new Employee();

const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is their employee ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is their email?",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is their office number?",
        }
    ])
    .then((answers) => {
        console.log(answers);
        buildTeam();
    })
};

const buildTeam = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'Add an employee or Finish building team:',
            name: 'Category',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish building your team'],
        }
    ])
        .then((answers) => {
            if (answers.Category === 'Add an Engineer')
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: "What is their name?",
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: "What is their employee ID?",
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: "What is their email?",
                    },
                    {
                        type: 'input',
                        message: 'What is their Github username?',
                        name: 'Github',
                    }
                ])
                .then((answers) => {
                    console.log(answers);
                    buildTeam();
                })
            if (answers.Category === 'Add an Intern')
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: "What is their name?",
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: "What is their employee ID?",
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: "What is their email?",
                    },
                    {
                        type: 'input',
                        message: 'What is their school?',
                        name: 'school',
                    }
                ])
                .then((answers) => {
                    console.log(answers);
                    buildTeam();
                });
            if (answers.Category === 'Finish building your team')
                generateHTML();
        })
};

const generateHTML = () => {
    console.log('generate team');
};

managerQuestions();