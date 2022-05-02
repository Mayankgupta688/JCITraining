export default function EmployeeDetails(props) {
    return (
        <div className="card" key={props.employee.id} style={{color: props.themeColor.textColor, backgroundColor: props.themeColor.backgroundColor}}>
            <img src={props.employee.avatar} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.employee.name}</h5>
                <p className="card-text">Mayank: Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button style={{marginRight: "10px"}} type="button" id={props.employee.id} onClick={props.deleteEmployee} className="btn btn-primary">Delete</button>
                <button type="button" className="btn btn-primary">Add</button>
            </div>
        </div>
    )
}