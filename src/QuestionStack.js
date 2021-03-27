import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import Words from "./Words4"
import Question from "./Question"


const QuestionStack = (props) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const proceed = () => {
        setActiveIndex(activeIndex + 1);
    }


    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const selection = Words.filter(
        (entry) => {
            return props.selectedKanji.includes(entry.testKanji)
        }
    );
    shuffleArray(selection);
    const selectedWords = selection.slice(0, 10);

    const question = selectedWords
        .filter((entry, index) => index === activeIndex)
        .map(
            (entry, index) => <Question
                key={index + entry.word + activeIndex}
                word={entry.word}
                answer={entry.answer}
                hint={entry.hint}
                ambiguous={entry.ambiguous}
                testKanji={entry.testKanji}
                proceed={proceed}/>
        )

    const closeButton = () => {
        if (question.length === 0) {
            return <NavLink exact to="/">KanjiSelector</NavLink>
        }
    }

    return (
        <div>
            {question}
            {closeButton()}
        </div>
    )
}

export default QuestionStack