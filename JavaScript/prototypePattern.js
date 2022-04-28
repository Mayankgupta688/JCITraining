function Employee(name, age) {
    this.name = name;
    this.age = age;
}

Employee.prototype.getName = function() {
    debugger;
    alert(this.name);
}

Employee.prototype.getAge = function() {
    alert(this.name);
}

var employeeOne = Employee("Mayank", 10);
employeeOne.getName();

var employeeTwo = new Employee("Anshul", 20)

debugger;