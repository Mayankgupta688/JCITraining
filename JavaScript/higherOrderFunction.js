var employeeList = [{
    name: "Mayank",
    id: 1,
    avatar: "https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg",
    createdAt: "Today"            
}, {
    name: "Anshul",
    id: 2,
    avatar: "https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg",
    createdAt: "Today"            
}, {
    name: "Meha",
    id: 3,
    avatar: "https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg",
    createdAt: "Today"            
}, {
    name: "Rubesh",
    id: 4,
    avatar: "https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg",
    createdAt: "Today"            
}]

var employeeNames = employeeList.map((employee) => {
    return {
        id: employee.id,
        name: employee.name
    }
})

debugger;