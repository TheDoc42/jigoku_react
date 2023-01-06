import {NavLink} from "react-router-dom";
import WordCard from "./WordCard";
import Button from '@mui/material/Button';
import {ToggleButton} from "@mui/material";
import {ToggleButtonGroup} from "@mui/material";
import {Alert} from "@mui/material";
import React, {useState} from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';

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

    const [sel2, setSel2] = React.useState(() => props.jlptLevels.map(i=>""+i));

    // event comes back as string
    const handleSel2 = (event, newSel2) => {
        //remove doubles
        let future = [...new Set(newSel2)]
        setSel2(future);
        props.updateJlptLevels(future)
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
            <Stack spacing={2}>
                <Stack
                    direction="row"
                    justifyContent="center"
                    spacing={2}>
                    {quizButton()}
                    <Button variant="outlined" onClick={clearKanjiCollection}>Deselect All</Button>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                                {props.selectedKanji.length} Kanji<br />
                                {props.Words.filter((entry) => (
                                    props.jlptLevels.includes(''+entry.jlpt)
                                    && props.selectedKanji.includes(entry.testKanji))).length} Words
                        </CardContent>
                    </Card>
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="center">
                    <ToggleButtonGroup
                        color="primary"
                        value={sel2}
                        justifyContent="center"
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
                </Stack>
    
                <div className="cards">
                    {props.Kanji.map((entry) => {
                            return (
                                    <WordCard
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
            </Stack>
        </div>


    )
}

export default KanjiSelector