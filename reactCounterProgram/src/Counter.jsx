import React, { useState } from "react"
import styles from "./Buttons/Buttons.module.css"

function Counter() {

    const [num, setNum] = useState(0);

    return (
        <>
            <p className="number">{num}</p>
            <button className={styles.counterButton} onClick={() => setNum((num) => num -1)}>minus</button>
            <button className={styles.counterButton} onClick={() => setNum((num) => num = 0)}>reset</button>
            <button className={styles.counterButton} onClick={() => setNum((num) => num + 1)}>plus</button>
        </>
    );
}

export default Counter