import React, {useState} from "react";
import {HashRouter, NavLink, Route} from "react-router-dom";
import KanjiSelector from "./KanjiSelector"
import QuestionStack from "./QuestionStack"

const JiGoku = (props) => {
    const [selectedKanji, setSelectedKanji] = useState([2, 3, 4, 5, 6]);

    const updateSelectedKanji = (selection) => {
        console.log('updateSelectedKanji', selection);
        setSelectedKanji([...selection]);
    }

    return (
        <HashRouter>
            <div>
                <h1>Simple SPA</h1>
                <ul className="header">
                    <li><NavLink exact to="/">KanjiSelector</NavLink></li>
                    <li><NavLink to="/words">QuestionStack</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/">
                        <KanjiSelector
                            selectedKanji={selectedKanji}
                            updateSelectedKanji={updateSelectedKanji}/>
                    </Route>
                    <Route path="/words">
                        <QuestionStack
                            selectedKanji={selectedKanji}/>
                    </Route>
                </div>
            </div>
        </HashRouter>
    );
}

export default JiGoku;