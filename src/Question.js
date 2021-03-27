import React, {useState} from "react";

const Question = (props) => {

    const [forceShowHint, setForceShowHint] = useState(false);
    const [solved, setSolved] = useState(false);
    const [correct, setCorrect] = useState(false);
    const [answer, setAnswer] = useState("");

    const toggleShowForceHint = (e) => {
        e.preventDefault();
        setForceShowHint(!forceShowHint);
    }

    const solveQuestion = (e) => {
        e.preventDefault();
        setCorrect(props.answer === answer)
        setSolved(true);
    }

    const updateAnswer = (e) => {
        setAnswer(e.target.value);
    }

    const hintText = () => {
        if (forceShowHint || props.ambiguous) {
            return <div className="hint">{props.hint}</div>
        }
    }

    const hintButton = () => {
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
            return <button onClick={props.proceed}>Continue</button>
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

    return (
        <div key={props.word + solved + props.active}>
            <form className={questionState()}>
                <div className="question Jpan" lang="ja">
                    {props.word}
                </div>
                {hintText()}
                <input onKeyDown={updateAnswer} type="text" val={answer}/>
                {hintButton()}
                {solveButton()}
                {continueButton()}
            </form>
        </div>


    )
}

export default Question