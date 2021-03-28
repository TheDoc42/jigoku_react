import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import Question from "./Question"


const QuestionStack = (props) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const updateKnowledge = (idx) => {
        let future = {...props.knowledge};
        let futureCount = 0;

        if (future.hasOwnProperty(idx)) {
            futureCount = future[idx].successCount + 1
        }

        future[idx] = {lastDate: new Date(), successCount: futureCount};

        props.setKnowledge(future)
    }

    const proceed = (idx, hasError) => {
        if (hasError) {
            selectedWords.push(selectedWords[activeIndex]);
        } else {
            updateKnowledge(idx)
        }
        setActiveIndex(activeIndex + 1);
    }


    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const selection = props.Words.filter(
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
                idx={entry.idx}
                word={entry.word}
                answer={entry.answer}
                hint={entry.hint}
                ambiguous={entry.ambiguous}
                testKanji={entry.testKanji}
                updateKnowledge={() => updateKnowledge(entry.idx)}
                proceed={proceed}/>
        )

    const closeButton = () => {
        if (question.length === 0) {
            return <NavLink exact to="/">KanjiSelector</NavLink>
        }
    }

    return (
        <div className="questionStack">
            {question}
            {closeButton()}
        </div>
    )
}

export default QuestionStack