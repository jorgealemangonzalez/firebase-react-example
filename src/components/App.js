import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NotesView from "./NotesView";
import Login from "./Login";
import "./App.css"

export const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="*">
                        <NotesView/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}