const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(userName, id, email, github = "test@test.com") {
        super(userName, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getPosition() {
        return Engineer.name;
    }
}

module.exports = Engineer;
