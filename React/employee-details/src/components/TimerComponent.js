export default function TimerComponent() {
    return (
        <div>
            <h1>Current Time is {new Date().getHours()}:{new Date().getMinutes()}:{new Date().getSeconds()}</h1>
        </div>
    )
}