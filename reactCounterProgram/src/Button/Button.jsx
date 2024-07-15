import styles from './Button.module.css'

function Button() {

    let count = 0;

    const handClick = (e) => e.target.style.display = "none";

    return(
        <>
        <button className={styles.myButton} onClick={(e) => handClick(e)}>click me</button>
        </>
    );
}

export default Button