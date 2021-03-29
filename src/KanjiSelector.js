import Card from "./Card"

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

    return (
        <div key={props.selectedKanji.join(',')}>
            <button onClick={clearKanjiCollection}>Deselect All</button>
            <div className="selectCount">{props.selectedKanji.length}</div>
            <div
                className="selectCards">{props.Words.filter((entry) => props.selectedKanji.includes(entry.testKanji)).length}</div>
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
                                }/>
                        )
                    }
                )}
            </div>
        </div>


    )
}

export default KanjiSelector