const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the name of the employee?',
            name: 'Name',
        },
        {
            type: 'input',
            message: 'What is the ID?',
            name: 'ID',
        },
        {
            type: 'input',
            message: 'What is their email?',
            name: 'Email',
        },
        {
            type: 'list',
            message: 'What type of employee?',
            name: 'Category',
            choices: ['Manager', 'Engineer', 'Intern'],
        }
    ])
    .then((answers) => {
        if (answers.Category === 'Manager')
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'What is their office number?',
                    name: 'Office',
                }
            ]);
        if (answers.Category === 'Engineer')
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'What is their Github username?',
                    name: 'Github',
                }
            ]);
        if (answers.Category === 'Intern')
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'What is their school?',
                    name: 'School',
                }
            ]);
            // inquirer.then((answers) => {
            //     fs.writeFile('index.html', answers.School, (err) =>
            //         err ? console.error(err) : console.log('Success!'));
            // })};
        }
    )

