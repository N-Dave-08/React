import styles from "./cssCode/cssCode.module.css"

function CssCode(props) {

    const {
        color,
        radius,
        shadowColor,
        shadowHorizontal,
        shadowVertical,
        shadowBlur,
    } = props;

    return (
        <>
            <div className={styles.cssCodeContainer}>
                <div className={styles.cssCodeChild}>background-color: {color};</div>
                <div className={styles.cssCodeChild}>border-radius: {radius};</div>
                <div className={styles.cssCodeChild}>box-shadow: {shadowHorizontal} {shadowVertical} {shadowBlur} {shadowColor};</div>
            </div>
        </>
    );
}

export default CssCode