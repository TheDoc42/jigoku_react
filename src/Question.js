import React, { useRef, useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

let hepburn = require("hepburn");

const Question = (props) => {

    const [forceShowHint, setForceShowHint] = useState(false);
    const [solved, setSolved] = useState(false);
    const [correct, setCorrect] = useState(false);
    const [answer, setAnswer] = useState("");

    const textInput = useRef(null);

    const toggleShowForceHint = (e) => {
        e.preventDefault();
        setForceShowHint(!forceShowHint);
    }

    const solveQuestion = (e) => {

        if(!solved) {

            e.preventDefault();
            const correct = props.answer.replace('～', '-') === hepburn.toHiragana(answer);
            setCorrect(correct);
            //console.log(props.answer, hepburn.toHiragana(answer))
            setSolved(true);
        } else {
            props.proceed(props.idx, correct, props.repeated);
        }
    }

    const updateAnswer = (e) => {
        console.log("setAnswer:"+e);
        setAnswer(e.target.value);
    }

    const hintText = () => {

        let hint = "";

        if (forceShowHint || props.ambiguous) {
            hint = props.hint;
        }
        return <div className="hint">{hint}</div>
    }

    const hintButton = () => {
        if (!(forceShowHint || props.ambiguous)) {
            return <Button variants="text" onClick={toggleShowForceHint}>Hint</Button>
        }
    }

    const solveDisplay = () => {
        if (!solved) {
            return <Stack
                direction="row"
                justifyContent="center"
                spacing={2}>
                <TextField
                    label="ROMAJI"
                    focused
                    autoFocus={true}
                    ref={textInput}
                    InputLabelProps={{ shrink: true }}
                    onChange={updateAnswer}
                    defaultValue={answer}
                    onKeyDown={onKeyPress}
                    type="text"></TextField>
                <Button variants="contained" onClick={solveQuestion}>Solve</Button>
            </Stack>
        }
    }

    const continueDisplay = () => {
        if (solved) {
            return <Stack
                direction="row"
                justifyContent="center"
                spacing={2}>
                <TextField
                    label="ROMAJI"
                    disabled
                    InputLabelProps={{ shrink: true }}
                    defaultValue={answer}
                    type="text"></TextField>
                <Button variants="contained"
                    autoFocus={true}
                    onClick={
                        e => {
                            e.preventDefault();
                            props.proceed(props.idx, correct, props.repeated);
                        }}>Proceed</Button>
            </Stack>
        }
    }

    const questionState = () => {
        if (solved) {
            if (correct) {
                return "question questionOk";
            }
            return "question questionNok";
        }
        return "question";
    }

    const onKeyPress = (e) => {
        if(e.keyCode === 13){
            solveQuestion(e);
        }
    }

    /*
    <ruby>
        今
        <rp>(</rp>
        <rt>こん</rt>
        <rp>)</rp>
    </ruby>
    <ruby>
        日
        <rp>(</rp>
        <rt>にち</rt>
        <rp>)</rp>
    </ruby>
    は
    */

    const questionDisplay = (characters) => {
        return characters.characters.map(
            (character, index) => {
                return (
                    <ruby key={character.row + index}>
                        {character.character}
                        {(solved) ? <rp>(</rp> : ''}
                        {(solved) ? <rt>{character.furigana}</rt> : ''}
                        {(solved) ? <rp>)</rp> : ''}
                    </ruby>)
            }
        )

    }

    return (
        <div key={props.word + solved + props.active}>
            <Box
              component="form"
              noValidate
              autoComplete="off"
                className={questionState()}>
                    <Stack spacing={2}>
                        <Box
                            className="question Jpan"
                            lang="ja">
                            {questionDisplay(props.characters)}
                        </Box>
                        {
                            hintText()
                        }

                        {
                            solveDisplay()
                        }
                        {
                            continueDisplay()
                        }
                        {
                            hintButton()
                        }
                    </Stack>
            </Box>
        </div>


    )
}

export default Question