var arrArray = [ 10, 20, 30, 40 ] 

var newArray = [...arrArray];

newArray.push(50);

var employee = {
    name: "Mayank",
    age: 30, 
    salary: 30
}

employee.salary = 1000;

var newemployee = {
    ...employee,
    salary: 6000
}

newEmployee.designation = "VP";

debugger;