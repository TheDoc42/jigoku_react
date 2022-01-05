const Card = (props) => {

    const getBkg = (knowledge) => {

        let bkg = { backgroundColor: 'white' }
        if (knowledge === 0) {
            bkg = { backgroundColor: 'rgb(178, 34, 34, 1)' }
        } else if (knowledge > 0) {
            bkg = { backgroundColor: 'rgb(11, 102, 35, ' + Math.min(1, knowledge) + ')' };
        }

        return bkg;
    }

    return (
        <div
            className={props.selected ? 'selected' : ''}
            style={getBkg(props.knowledge)}
            onClick={props.toggleSelected}>{props.char}</div>
    )
}

export default Card