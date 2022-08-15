//requires for functions and node modules
const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./__utils__/generate-page.js');
const generatePage = require('./__src__/page-template');

//requires for employees
const Manager = require('./__lib__/Manager');
const Engineer = require('./__lib__/Engineer');
const Intern = require('./__lib__/Intern');

const teamArr = [];

const startTeam = () =>
{
    return inquirer.prompt
    ([
        {
            type: 'input',
            name: 'name',
            message: `Who is your team's manager?`
        },
        {
            type: 'input',
            name: 'id',
            message: `Please enter the manager's ID:`
        },
        {
            type: 'input',
            name: 'email',
            message: `Please enter the manager's email:`
        },
        {
            type: 'input',
            name: 'office',
            message: `Please enter the manager's office number or location:`
        }
    ])
    .then(managerData =>
    {
        const  { name, id, email, office } = managerData; 
        const manager = new Manager (name, id, email, office);

        teamArr.push(manager); 
        console.log(manager);
    });
};

const addEmployees = () =>
{
    return inquirer.prompt
    ([
        {
            type: 'list',
            name: 'role',
            message: `What is your employee's role?`,
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: `What is their name?`
        },
        {
            type: 'input',
            name: 'id',
            message: `Please enter their ID:`,
        },
        {
            type: 'input',
            name: 'email',
            message: `Please enter their email address:`
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter their GitHub username:',
            when: (input) => input.role === "Engineer",
        },
        {
            type: 'input',
            name: 'school',
            message: `Please enter the name of their current school:`,
            when: (input) => input.role === "Intern"
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: `Would you like to add another employee to your team?`,
            default: false
        }
    ])
    .then(({ role, name, id, email, github, school, confirmAddEmployee }) =>
        {   
            if (role === "Engineer")
            {
                employee = new Engineer (name, id, email, github);
                console.log(employee);
            }
            else if (role === "Intern")
            {
                employee = new Intern (name, id, email, school);
                console.log(employee);
            };

            teamArr.push(employee);

            if (confirmAddEmployee)
            {
                return addEmployees(teamArr);
            }
            else
            {
                return teamArr;
            };
        });
};

startTeam()
    .then(addEmployees)
    .then(teamArr =>
        {
            return generatePage(teamArr);
        });