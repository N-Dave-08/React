import React, { useState } from "react"
import styles from "./Buttons/Buttons.module.css"

function Counter() {

    let [num, setNum] = useState(0);

    const increaseValue = () => {
        setNum(num + 1);
    }

    const resetValue = () => {
        setNum(num = 0);
    }

    const decreaseValue = () => {
        setNum(num - 1);
    }

    return (
        <>
            <p className="number">{num}</p>
            <button className={styles.counterButton} onClick={decreaseValue}>minus</button>
            <button className={styles.counterButton} onClick={resetValue}>reset</button>
            <button className={styles.counterButton} onClick={increaseValue}>plus</button>
        </>
    );
}

export default Counter