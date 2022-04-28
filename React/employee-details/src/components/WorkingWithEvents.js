export default function WorkingWithEvents() {

    function showAlert(dataOne, dataTwo) {
        alert(dataOne + " " + dataTwo);
    }

    function inputChange(a, b, event) {
        debugger;
        alert(event.target.id);
    }

    function defaultFunction(event) {
        alert(event.target.id)
    }

    function randomFunction(event) {
        inputChange(1, 2, event)
    }

    return (
        <div>
            <input type="text" id="input1" onChange={randomFunction} />
            <input type="text" id="input2" onChange={function randomFunction() { inputChange(1, 2, null) }} />
            <input type="text" id="input3" onChange={(event) => inputChange(1, 2, event)} />
            <input type="text" id="input4" onChange={(event) => inputChange(1, 2, event)} />
            <input type="text" id="input5" onChange={defaultFunction} />

            <input type="button" value="Click" onClick={(event) => { showAlert(1, 2, event) }} />
            <input type="button" value="Click" onClick={function(event) { showAlert(2, 3, event) }} />
            <input type="button" value="Click" onClick={function(event) { showAlert(3, 4, event) }} />
        </div>
    )
}