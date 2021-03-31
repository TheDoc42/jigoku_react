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

    const updateKnowledge = (idx, isSuccess) => {
        let future = {...props.knowledge};

        let futureCount = 0;

        if (isSuccess) {
            if (future.hasOwnProperty(idx)) {
                futureCount = future[idx].successCount + 1
            } else {
                futureCount = 1;
            }
        }

        future[idx] = {lastTest: new Date().getTime(), successCount: futureCount};

        props.setKnowledge(future)
    }

    const proceed = (idx, isCorrect, isRepeated) => {
        const future = [...selectedWords];
        //repeated cards award no points
        if (!isRepeated) {
            updateKnowledge(idx, isCorrect)
        }
        if (!isCorrect) {
            let onceMore = {...selectedWords[activeIndex]};
            delete onceMore.result;
            onceMore.repeated = true;
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
                characters={props.CharactersOfWords[entry.firstCharRow]}
                answer={entry.answer}
                hint={entry.hint}
                repeated={entry.repeated}
                ambiguous={entry.ambiguous}
                testKanji={entry.testKanji}
                updateKnowledge={() => updateKnowledge(entry.idx)}
                proceed={proceed}/>
        }
    }

    const closeButton = () => {
        if (activeIndex >= selectedWords.length) {

            selectedWords.map((entry) => delete entry.result);

            return <NavLink exact to="/">
                <button className="switchScreen">KanjiSelector</button>
            </NavLink>
        }
    }

    const progress = (entries) => {
        // style={{flex: 'repeat(1fr ' + entries.length + ')'}}>

        //console.log(entries)

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