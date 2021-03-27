import { useState } from "react";
const Card = (props) => {

    const [selected, setSelected] = useState(props.selected);

    const toggleSelected = () => {
        const future = !selected;
        setSelected(future);
        props.updateSelected(props.index, future);
    }

    var bkg = { backgroundColor: 'white' }
    if (props.knowledge === -1) {
        bkg = { backgroundColor: 'rgb(178, 34, 34, 1)' }
    } else if (props.knowledge > 0) {
        bkg = { backgroundColor: 'rgb(11, 102, 35, ' + props.knowledge + ')' };
    }

    return (
        <div key={props.char + props.selected} className={props.selected ? 'selected' : ''} style={bkg} onClick={toggleSelected}>{props.char}</div>
    )
}

export default Card