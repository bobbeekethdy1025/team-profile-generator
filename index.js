// This code created with the help of my peers. Thank you for the assistance.
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const template = require("./src/template")
const myTeam = [];


questions = [
    "Please select the team member you want to setup: ",
    "Please enter Employee's name?",
    "Please enter Employee's ID?",
    "Please enter Employee's Email?",
];

managerPrompt();
function managerPrompt() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Please enter the team manager's name.",
                name: "manName",
            },
            {
                type: "input",
                message: "Please enter the team manager's ID.",
                name: "id",
            },
            {
                type: "input",
                message: "Please enter the team manager's email.",
                name: "email",
            },
            {
                type: "input",
                message: "Please enter the team manager's office number.",
                name: "officeNum",
            },
        ])
        .then((response) => {
            let {manName, id, email, officeNum} = response;
            const newManager = new Manager(manName, id, email, officeNum);
            myTeam.push(newManager);
            questionPrompt();
        });
}

function questionPrompt() {
    inquirer
        .prompt([
            {
                type: "list",
                message: questions[0],
                choices: ["Engineer", "Intern"],
                name: "employeeType",
            },
            {
                type: "input",
                message: questions[1],
                name: "userName",
            },
            {
                type: "input",
                message: questions[2],
                name: "id",
            },
            {
                type: "input",
                message: questions[3],
                name: "email",
            },
            {
                type: "input",
                message: "Github Username?",
                name: "github",
                when: (response) => response.employeeType === "Engineer",
            },
            {
                type: "input",
                message: "School name?",
                name: "school",
                when: (response) => response.employeeType === "Intern",
            },
            {
                type: "confirm",
                message: "Would you like to add another member to the team?",
                name: "addEmployee",
            },
        ])
        .then((response) => {
            let newEmployee;
            let {
                employeeType,
                userName,
                id,
                email,
                github,
                school,
                addEmployee,
            } = response;
            if(employeeType === "Engineer") {
                newEmployee = new Engineer(userName, id, email, github);
                myTeam.push(newEmployee);
            } else if(employeeType === "Intern") {
                newEmployee = new Intern(userName, id, email, school);
                myTeam.push(newEmployee);
            }

            addEmployee ? questionPrompt() : generateHtml();
        });
}

function generateHtml() {
    fs.writeFile("./index.html", template.newHtml(), (err) => {
        err ? console.error(err) : console.log("");
    });

    for(let i = 0; i < myTeam.length; i++) {
        switch(myTeam[i].getPosition()) {
            case "Manager":
                fs.appendFile(
                    "./index.html",
                    template.managerHtml(myTeam[i]),
                    (err) => {
                        err
                            ? console.error(err)
                            : console.log("Card created!");
                    }
                );
                break;
            case "Engineer":
                fs.appendFile(
                    "./index.html",
                    template.engineerHtml(myTeam[i]),
                    (err) => {
                        err
                            ? console.error(err)
                            : console.log("Card created!");
                    }
                );
                break;
            case "Intern":
                fs.appendFile(
                    "./index.html",
                    template.internHtml(myTeam[i]),
                    (err) => {
                        err
                            ? console.error(err)
                            : console.log("Card created!");
                    }
                );
                break;
            default:
                fs.writeFile(
                    "./index.html",
                    template.closingHtml(),
                    (err) => {
                        err
                            ? console.error(err)
                            : console.log("HTML fill out!");
                    }
                );
                break;
        }
    }
}
