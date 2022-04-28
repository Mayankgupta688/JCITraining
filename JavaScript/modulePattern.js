// Module Pattern

function Employee(name, age) {
    var name = name;
    var age = age;

    function getName() {
        return name;
    }

    function getAge() {
        return name;
    }

    return {
        name: name,
        age: age,
        getAge: getAge,
        getName: getName
    } 
}

var employeeOne = Employee("Mayank", 30)
var employeeTwo = Employee("Anshul", 20)

debugger;