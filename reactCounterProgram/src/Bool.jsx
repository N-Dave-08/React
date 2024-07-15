import PropTypes from 'prop-types'

function Bool(props) {
    return(props.Show ? <p>{props.message}</p> : <p>No Show</p>);
}

Bool.propTypes = {
    Show: PropTypes.bool,
}

export default Bool