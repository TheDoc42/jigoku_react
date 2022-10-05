import { NavLink } from "react-router-dom";
import Card from "./Card";

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
        props.updateSelectedKanji([]);
    }

    const quizButton = () => {
        if (props.selectedKanji.length > 0) {
            return (<ul className="header">
                <li><NavLink to="/words">
                    <button className="switchScreen">QuestionStack</button>
                </NavLink></li>
            </ul>)
        }
    }

    return (
        <div key={props.selectedKanji.join(',')} className="selectorGrid">
            {quizButton()}
            <button onClick={clearKanjiCollection}>Deselect All</button>
            <div className="selectCount">{props.selectedKanji.length} Kanji</div>
            <div
                className="selectCards">{props.Words.filter((entry) => (
                    props.jlptLevels.includes(entry.jlpt)
                    && props.selectedKanji.includes(entry.testKanji))).length} Words
            </div>
            <label className="kanjiSel kanji5"
                onClick={(() => props.updateJlptLevels(5, props.jlptLevels.includes(5)))}>
                <input type="checkbox" readOnly checked={props.jlptLevels.includes(5)} />Jlpt 5</label>
            <label className="kanjiSel kanji4"
                onClick={(() => props.updateJlptLevels(4, props.jlptLevels.includes(4)))}>
                <input type="checkbox" readOnly checked={props.jlptLevels.includes(4)} />Jlpt 4</label>
            <label className="kanjiSel kanji3"
                onClick={(() => props.updateJlptLevels(3, props.jlptLevels.includes(3)))}>
                <input type="checkbox" readOnly checked={props.jlptLevels.includes(3)} /> Jlpt 3</label>
            <label className="kanjiSel kanji2"
                onClick={(() => props.updateJlptLevels(2, props.jlptLevels.includes(2)))}>
                <input type="checkbox" readOnly checked={props.jlptLevels.includes(2)} />Jlpt 2</label>
            <label className="kanjiSel kanji1"
                onClick={(() => props.updateJlptLevels(1, props.jlptLevels.includes(1)))}>
                <input type="checkbox" readOnly checked={props.jlptLevels.includes(1)} />Jlpt 1</label>
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
                            } />
                    )
                }
                )}
            </div>
        </div>


    )
}

export default KanjiSelector