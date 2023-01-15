const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');

const employee = new Employee();

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
        team.push(answers);
        console.log(team);
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
                    // console.log(answers);
                    team.push(answers);
                    console.log(team);
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
                    team.push(answers);
                    console.log(team);
                    buildTeam();
                });
            if (answers.Category === 'Finish building your team')
                finish(team);
        })
};

const generateHTML = (team) => {
    console.log(team);
    const name = team.name;
    const id = team.id;
    const role = team.role;
    const email = team.email;
    const github = team.github;
    console.log('generate team');
    console.log(team[0].name);
 `   <!DOCTYPE html>
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
    <header class="header123">My Team</header>
  
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column">
                    <div
                    id="cardContainer"
                        class="card pb-6 shadow-2xl rounded-xl is-cursor-pointer transform is-duration-300 hover-translate-y">
                        <div class="card-content has-text-left">
                            <div class="content">
                                <h3 class="is-size-3 mb-5">${name}</h3>
                                <h3 class="is-size-4 mb-5">${role}</h3>
                                <p class="is-size-6 has-text-weight-normal">ID: ${id}</p>
                                <p class="is-size-6 has-text-weight-normal">Email: ${email}</p>
                                <p class="is-size-6 has-text-weight-normal">Github ${github}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script src="/index.js"></script>
</body>

</html>`
};

const finish = (team) => {
    console.log(team);
    fs.writeFile('newRender/index.html', generateHTML(team));
    console.log(team);
    console.log("Success!");
}

managerQuestions();