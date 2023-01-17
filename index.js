const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employee = new Employee();
const manager = new Manager();
const engineer = new Engineer();
const intern = new Intern();

const team = [];

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
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        team.push(manager);
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
                        name: 'github',
                    }
                ])
                .then((answers) => {
                    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                    team.push(engineer);
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
                    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                    team.push(intern);
                    buildTeam();
                });
            if (answers.Category === 'Finish building your team')

                finish(team);
                // loop(team);
        })
};

const generateHTML = (team) => {
    console.log(team);
    console.log('generate team');
 return `   <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma-rtl.min.css">
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <header class="is-size-1 has-text-left">My Team</header>
  
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column">` + team.map(team => `
                    <div
                    id="cardContainer"
                        class="card pb-2 shadow-2xl rounded-xl is-cursor-pointer transform is-duration-300 hover-translate-y">
                        <div class="card-content has-text-left">
                            <div class="content">                          
                                <h3 class="is-size-3 mb-5">${team.getName()}</h3>
                                <h3 class="is-size-4 mb-5">${team.getRole()}</h3>
                                <p class="is-size-6 has-text-weight-normal">ID: ${team.getId()}</p>
                                <p class="is-size-6 has-text-weight-normal">Email: <a href = "mailto: ${team.getEmail()}">${team.getEmail()}</a></p>
                            </div>
                        </div>
                    </div>`).join('') + `
                </div>
            </div>
        </div>
    </section>
    <script src="/index.js"></script>
</body>

</html>`
};

const finish = (team) => {
    fs.writeFileSync('dist/index.html', generateHTML(team));
    console.log("Success!");
}

managerQuestions();