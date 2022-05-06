export function addEmployeeToStore(employeeList) {
    debugger;
    return {
        type: "ADD_EMPLOYEES",
        payload: employeeList
    }
}

export function deleteAllEmployees(employeeList) {
    return {
        type: "DELETE_ALL_EMPLOYEES"
    }
}

export function deleteSpecificEmployee(employeeId) {
    return {
        type: "DELETE_SPECIFIC_EMPLOYEE",
        payload: employeeId
    }
}