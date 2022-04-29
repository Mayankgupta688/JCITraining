class Employee {
    constructor(userName, userAge) {
        this.userAge = userAge;
        this.userName = userName
        this.getData = function() { }
    }
    getName() {
        alert(this.userName)
    }

    getAge() {
        alert(this.userAge)
    }
}

class Manager extends Employee {
    constructor(userName, userAge, userDesignation) {
        super(userName, userAge);
        this.userDesignation = userDesignation;
    }
}

var objectOne = new Manager("Mayank", 10, "VP");
objectOne.getName()