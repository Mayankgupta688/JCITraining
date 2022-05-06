import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import {ConnectedComponent as EmployeeListComponent} from "./components/EmployeeListComponent";
import { ConnectedComponent as EmployeeCountComponent } from "./components/EmployeeCountComponent";
import rootReducer from "./reducers/index";

var appStore = createStore(rootReducer)

ReactDOM.render((
    <>
        <Provider store={appStore}>
            <EmployeeCountComponent></EmployeeCountComponent>
            <EmployeeListComponent></EmployeeListComponent>
        </Provider>
        
    </>
), document.getElementById("root"))
