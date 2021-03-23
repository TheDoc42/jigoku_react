const Card = (props) => {

    var bkg = {backgroundColor: 'white'}

    if (props.knowledge === -1) {
        bkg = {backgroundColor: 'rgb(178, 34, 34, 1)'}
    } else if (props.knowledge > 0) {
        bkg = {backgroundColor: 'rgb(11, 102, 35, ' + props.knowledge + ')'};
    }

    return (
        <div className={props.selected ? 'selected' : ''} style={bkg} onClick={props.handleClick}>{props.char}</div>
    )
}

export default Card