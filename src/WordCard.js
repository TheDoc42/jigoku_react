const WordCard = (props) => {

    const getStyle = (knowledge) => {

        let style = { backgroundColor: 'white', color:'black' }
        if (knowledge === 0) {
            style = { backgroundColor: 'rgb(178, 34, 34, 1)', color: 'white' }
        } else if (knowledge > 0) {
            style = { backgroundColor: 'rgb(11, 102, 35, ' + Math.min(1, knowledge) + ')', color: 'white' };
        }

        return style;
    }

    return (
        <div
            className={props.selected ? 'selected' : ''}
            style={getStyle(props.knowledge)}
            onClick={props.toggleSelected}>{props.char}</div>
    )
}

export default WordCard