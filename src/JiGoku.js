import React from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import CardsSelector from "./CardsSelector"
import Question from "./Question"

class JiGoku extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Simple SPA</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">CardsSelector</NavLink></li>
                        <li><NavLink to="/stuff">Question</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={CardsSelector} />
                        <Route path="/stuff" component={Question} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default JiGoku;