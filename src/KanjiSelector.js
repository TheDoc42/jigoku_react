import {useEffect} from "react"
import Card from "./Card"
import Kanji from "./Kanji4"

const KanjiSelector = (props) => {

    const updateKanjiSelection = (index, toggleOn) => {
        if (toggleOn) {
            addCard(index)
        } else {
            removeCard(index)
        }
    };

    const addCard = (index) => {
        let future = props.selectedKanji;
        future.push(index);
        props.updateSelectedKanji(future);
    }

    const removeCard = (index) => {
        let future = props.selectedKanji;
        future = future.filter((entry) => entry !== index);
        props.updateSelectedKanji(future);
    }

    const clearKanjiCollection = () => {
        props.updateSelectedKanji([]);
    }

    useEffect(() => {
        console.log('update', props.selectedKanji)
    })

    return (
        <div key={props.selectedKanji.join(',')}>
            <button onClick={clearKanjiCollection}>Deselect All</button>
            <div className="selectCount">{props.selectedKanji.length}</div>
            <div className="cards">
                {Kanji.map((entry, index) => {
                        return (
                            <Card
                                index={index}
                                key={entry.char}
                                char={entry.char}
                                knowledge={entry.knowledge}
                                selected={props.selectedKanji.includes(index)}
                                toggleSelected={() => {
                                    updateKanjiSelection(index, !props.selectedKanji.includes(index))
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