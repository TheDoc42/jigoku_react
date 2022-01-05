import React, { useEffect, useRef, useState } from "react";

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
        e.preventDefault();
        const correct = props.answer === hepburn.toHiragana(answer);
        setCorrect(correct);
        //console.log(props.answer, hepburn.toHiragana(answer))
        setSolved(true);
    }

    const updateAnswer = (e) => {
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
        return;

        if (!(forceShowHint || props.ambiguous)) {
            return <button onClick={toggleShowForceHint}>Hint</button>
        }
    }

    const solveButton = () => {
        if (!solved) {
            return <button onClick={solveQuestion}>Solve</button>
        }
    }

    const continueButton = () => {
        if (solved) {
            return (<button onClick={
                (e) => {
                    e.preventDefault();
                    props.proceed(props.idx, correct, props.repeated);
                }}>Proceed</button>)
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

    useEffect(() => {
        textInput.current.focus();
    })

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

    const displayCharacters = (characters) => {
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
            <form className={questionState()}>
                <div className="question Jpan" lang="ja">
                    {displayCharacters(props.characters)}
                </div>
                {
                    hintText()
                }
                <input ref={textInput} onKeyDown={updateAnswer} defaultValue={answer} type="text" />
                {
                    solveButton()
                }
                {
                    continueButton()
                }
            </form>
            {
                hintButton()
            }
        </div>


    )
}

export default Question