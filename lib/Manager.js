const Employee = require("./Employee");

class Manager extends Employee {
    constructor(userName, id, email, officeNumber = "100") {
        super(userName, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getPosition() {
        return Manager.name;
    }
}

module.exports = Manager;
