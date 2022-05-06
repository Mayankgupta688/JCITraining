export default function employeesReducer(employeeStore = [], action) {
    debugger;
    if(action.type === "ADD_EMPLOYEES") {
        return action.payload
    }

    if(action.type === "DELETE_ALL_EMPLOYEES") {
        return [];
    }

    if(action.type === "DELETE_SPECIFIC_EMPLOYEE") {
        return employeeStore.filter((employee) => {
            return employee.id !== action.payload;
        })
    }

    return [];
}