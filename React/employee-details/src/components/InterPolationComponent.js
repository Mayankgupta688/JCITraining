export default function InterPolationComponent() {
    var userName = "Mayank";

    var employeeDetails = {
        userName: "Mayank Gupta",
        userAge: 40
    }

    function getData() {
        return "User Age is 20"
    }

    return (
        <div>
            <h1 className={userName}>User Name is: {employeeDetails.userName}</h1>
            <h2>Current Time is: {new Date().getHours()} : {new Date().getMinutes()} : {new Date().getSeconds()}</h2>
            <h3>Addition of {1 + 1}</h3>
            <h4>{getData()}</h4>
        </div>
    )
}