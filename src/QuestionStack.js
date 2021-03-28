import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import Question from "./Question"


const QuestionStack = (props) => {

    const getWordStack = () => {
        const selection = props.Words.filter(
            (entry) => {
                return props.selectedKanji.includes(entry.testKanji)
            }
        );
        shuffleArray(selection);
        return selection.slice(0, 10);
    }

    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedWords, setSelectedWords] = useState(getWordStack());

    const updateKnowledge = (idx) => {
        let future = {...props.knowledge};
        let futureCount = 0;

        if (future.hasOwnProperty(idx)) {
            futureCount = future[idx].successCount + 1
        }

        future[idx] = {lastDate: new Date(), successCount: futureCount};

        props.setKnowledge(future)
    }

    const proceed = (idx, isCorrect) => {
        const future = [...selectedWords];
        if (isCorrect) {
            updateKnowledge(idx)
        } else {
            let onceMore = {...selectedWords[activeIndex]};
            delete onceMore.result;
            future.push(onceMore);
        }
        future[activeIndex].result = isCorrect;
        setSelectedWords(future);
        setActiveIndex(activeIndex + 1);
    }


    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }


    const question = (entry) => {
        if (entry != null) {
            return <Question
                key={entry.word + activeIndex}
                idx={entry.idx}
                word={entry.word}
                answer={entry.answer}
                hint={entry.hint}
                ambiguous={entry.ambiguous}
                testKanji={entry.testKanji}
                updateKnowledge={() => updateKnowledge(entry.idx)}
                proceed={proceed}/>
        }
    }

    const closeButton = () => {
        if (question.length === 0) {
            return <NavLink exact to="/">KanjiSelector</NavLink>
        }
    }

    const progress = (entries) => {
        // style={{flex: 'repeat(1fr ' + entries.length + ')'}}>

        console.log(entries)

        return (<div className="progress">
            {
                entries.map(
                    (entry, index) => {
                        let displayClass = '';
                        if (entry.result !== undefined) {
                            displayClass = entry.result ? ('resultTrue') : 'resultFalse';
                        }
                        return <div key={'progress' + index}
                                    className={displayClass}></div>
                    }
                )
            }
        </div>)
    }

    return (
        <div className="questionStack">
            {progress(selectedWords)}
            {question(selectedWords[activeIndex])}
            {closeButton()}
        </div>
    )
}

export default QuestionStack