const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is the name of the employee?',
                    name: 'employeeName',
                }
            ])
            .then((answer) => {
                console.log(answer.employeeName);
                // return answers.name;
                this.getId();
            });
        }

    getId() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is the ID?',
                    name: 'employeeID',
                }
            ])
            .then((answer) => {
                console.log(answer.employeeID);
                // return answer.employeeID;
                this.getEmail();
            });
    }

    getEmail() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is their email?',
                    name: 'employeeEmail'
                }
            ])
            .then((answer) => {
                console.log(answer.employeeEmail);
                this.getRole();
            });
    }

    getRole() {
        // return 'Employee';
        console.log(this.answer);
    }

}

const employee = new Employee("John", 17, "email@email.com");

employee.getName();

module.exports = Employee;