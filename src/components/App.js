import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NotesView from "./NotesView";
import Login from "./Login";
import "./App.css"

export const App = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="*">
                        <NotesView/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}