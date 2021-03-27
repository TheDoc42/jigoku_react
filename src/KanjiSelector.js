import { useState } from "react";
import Card from "./Card"
import Kanji from "./Kanji4"

const KanjiSelector = (props) => {

    const updateKanjiSelection = (index, toggleOn) => {
        let future = props.selectedKanji;

        if (toggleOn) {
            if (future.indexOf(index) < 0) {
                future.push(index);
                props.setSelectedKanji(future);
            }
        } else {
            if (future.indexOf(index) > -1) {
                future = future.filter((entry) => entry != index);
                props.setSelectedKanji(future);
            }
        }
    };

    const clearKanjiCollection = () => {
        props.setSelectedKanji([]);
    }

    return (
        <div>
            <button onClick={clearKanjiCollection}>Deselect All</button>
            <div className="selectCount">{props.selectedKanji.length}</div>
            <div className="cards" key={props.selectedKanji.toString()}>
                {Kanji.map((entry, index) => {
                    return (
                        <Card
                            index={index}
                            key={entry.char}
                            char={entry.char}
                            knowledge={entry.knowledge}
                            updateSelected={updateKanjiSelection}
                            selected={props.selectedKanji.indexOf(index) > -1} />
                    )
                }
                )}
            </div>
        </div >


    )
}

export default KanjiSelector