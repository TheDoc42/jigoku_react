import {NavLink} from "react-router-dom";
import Card from "./Card";
import Button from '@mui/material/Button';
import {ToggleButton} from "@mui/material";
import {ToggleButtonGroup} from "@mui/material";
import {Alert} from "@mui/material";
import React, {useState} from "react";

const KanjiSelector = (props) => {

    const updateKanjiSelection = (index, toggleOn) => {
        let future = [...props.selectedKanji];
        if (toggleOn) {
            future.push(index);
            props.updateSelectedKanji(future);
        } else {
            future = future.filter((entry) => entry !== index);
            props.updateSelectedKanji(future);
        }
    };

    const clearKanjiCollection = () => {
        setSel2([]);
        props.updateSelectedKanji([]);
    }

    const [sel2, setSel2] = React.useState(() => []);

    const handleSel2 = (event, newSel2) => {
        setSel2(newSel2);
        props.updateSelectedKanji(newSel2)
        console.log(newSel2)
    };

    const quizButton = () => {
        if (props.selectedKanji.length > 0) {
            return (<NavLink to="/words">
                <Button variant="contained">QuestionStack</Button>
            </NavLink>)
        } else {
            return <Button variant="disabled">QuestionStack</Button>
        }
    }

    return (
        <div key={props.selectedKanji.join(',')}>
            {quizButton()}
            <Button variant="outlined" onClick={clearKanjiCollection}>Deselect All</Button>
            <Alert severity="info">
                <p>
                    {props.selectedKanji.length} Kanji
                </p>
                <p>
                    {props.Words.filter((entry) => (
                        props.jlptLevels.includes(entry.jlpt)
                        && props.selectedKanji.includes(entry.testKanji))).length} Words
                </p>
            </Alert>
            <ToggleButtonGroup
                color="primary"
                value={sel2}
                onChange={handleSel2}>
                <ToggleButton
                    value="5">Jlpt 5</ToggleButton>
                <ToggleButton
                    value="4">Jlpt 4</ToggleButton>
                <ToggleButton
                    value="3">Jlpt 3</ToggleButton>
                <ToggleButton
                    value="2">Jlpt 2</ToggleButton>
                <ToggleButton
                    value="1">Jlpt 1</ToggleButton>
            </ToggleButtonGroup>

            <div className="cards">
                {props.Kanji.map((entry) => {
                        return (
                            <Card
                                index={entry.idx}
                                key={entry.char}
                                char={entry.char}
                                knowledge={props.kanjiKnowledge[entry.idx]}
                                selected={props.selectedKanji.includes(entry.idx)}
                                toggleSelected={() => {
                                    updateKanjiSelection(entry.idx, !props.selectedKanji.includes(entry.idx))
                                }
                                }/>
                        )
                    }
                )}
            </div>
        </div>


    )
}

export default KanjiSelector