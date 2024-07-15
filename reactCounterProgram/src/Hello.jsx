import styles from "./Hello/hello.module.css"
import propTypes from "prop-types"

function Hello(props) {

    const welcomeMessage = <h1 className={styles.welcome}>Welcome {props.username}</h1>
    const pleaseInput = <h1 className={styles.pleaseInput}>Please input username</h1>

    return (props.loggedin ? welcomeMessage : pleaseInput);
}

Hello.propTypes = {
    loggedin: propTypes.bool,
    username: propTypes.string,
}

Hello.defaultProps = {
    loggedin: false,
    username: "None",
}

export default Hello