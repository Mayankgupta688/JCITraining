import React, {useState } from 'react';
import Axios from "axios";

export default function AddEmployeeComponent(props) {

    var [userDetails, setUserDetails] = useState({
        avatar: "https://tse3.mm.bing.net/th?id=OIP.snBqTc38-h2IJPHC7UzvXgHaE8&pid=Api&P=0&w=249&h=166",
        name: "",
        createdAt: "",
        id: ""
    });

    function updateData() {
        Axios.post("https://5a530e1477e1d20012fa066a.mockapi.io/login", userDetails).then((response) => {
            props.history.push("/");
        });
    }

    function updateTextData(event) {
        setUserDetails({
            ...userDetails,
            [event.target.id]: event.target.value
        })
    }

    return (
        <div>   
            Enter Name<input id="name" type="text" onClick={updateTextData}></input><br/><br/>
            Enter Id<input id="id" type="text" onClick={updateTextData}></input><br/><br/>
            Enter CreatedAt<input id="createdAt" type="text" onClick={updateTextData}></input><br/><br/>
            <input type="button" value="Save" onClick={updateData} />
        </div>
    
    
        
    )
}