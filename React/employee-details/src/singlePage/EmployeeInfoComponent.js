import React, {useState, useEffect} from "react";
import Axios from "axios";
import EmployeeDetails from "./EmployeeDetailsFunctional";

export default function EmployeeInfoComponent(props) {
    var [empDetails, setEmpDetails] = useState({})

    useEffect(() => {
        Axios.get("https://5a530e1477e1d20012fa066a.mockapi.io/login/" + props.match.params.id).then((response) => {
            setEmpDetails(response.data)
        })
    })

    function goToHome() {
        props.history.push("/")
    }

    return (
        <div>
            <EmployeeDetails employee={empDetails}/>
            <input type="button" onClick={goToHome} value="Go To Home" />
        </div>
    )
}