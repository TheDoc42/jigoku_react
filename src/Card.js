import Kanji from "./Kanji4";

const Card = (props) => {

    const getBkg = (index) => {

        const knowledge = Kanji[index];

        let bkg = {backgroundColor: 'white'}
        if (knowledge === -1) {
            bkg = {backgroundColor: 'rgb(178, 34, 34, 1)'}
        } else if (knowledge > 0) {
            bkg = {backgroundColor: 'rgb(11, 102, 35, ' + props.knowledge + ')'};
        }

        return bkg;
    }

    return (
        <div
            className={props.selected ? 'selected' : ''}
            style={getBkg(props.index)}
            onClick={props.toggleSelected}>{props.char}</div>
    )
}

export default Card