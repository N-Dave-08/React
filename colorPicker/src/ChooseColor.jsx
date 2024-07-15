import React, { useState } from "react"
import styles from "./Box/Box.module.css"

function ChooseColor() {

    const [color, setColor] = useState("#757575");
    const [radius, setRadius] = useState("10");

    return (
        <>
            <h1>Color Picker</h1>
            <div className={styles.box} style={{backgroundColor: color, borderRadius: radius}}>
                
            </div>
            <br />
            <p>Selected Color: {color}</p>
            <input type="color" value={color} onChange={(event) => setColor(event.target.value)}/>
            <br />
            <input type="range" value={parseInt(radius)} onChange={(event) => setRadius(`${event.target.value}px`)}/>
            <p>Radius: {`${radius}`}</p>
        </>
    );
}

export default ChooseColor