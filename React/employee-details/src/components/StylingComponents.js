import "../styles/StylingComponentsStyle.css";

export default function StylingComponent() {

    var styleObj = {
        color: "aqua", 
        border: "1px solid red", 
        paddingLeft: "10px", 
        paddingTop: "20px"
    }
    return (
        <div>
            <h1 className="sample" id="sample">This is the First Header</h1>
            <h2>This is the First Header Green</h2>
            <h3>This is the First Header Blue</h3>
            <h4>This is the First Header Grey</h4>
        </div>
    )
}