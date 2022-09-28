const Employee = require("./Employee");

class Intern extends Employee {
    constructor(userName, id, email, school = "UCLA") {
        super(userName, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getPosition() {
        return Intern.name;
    }
}

module.exports = Intern;
