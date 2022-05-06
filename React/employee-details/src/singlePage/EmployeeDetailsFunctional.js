export default function EmployeeDetails(props) {

    function showDetails(event) {
        props.history.push("/employee/" + event.target.id)
    }
    return (
        <div className="card" key={props.employee.id} style={{width: "18rem", display: "inline-block", margin: "10px"}}>
            <img src="https://tse3.mm.bing.net/th?id=OIP.snBqTc38-h2IJPHC7UzvXgHaE8&pid=Api&P=0&w=249&h=166" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.employee.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button style={{marginRight: "10px"}} type="button" id={props.employee.id} className="btn btn-primary" onClick={showDetails}>Show Details</button>
            </div>
        </div>
    )
}