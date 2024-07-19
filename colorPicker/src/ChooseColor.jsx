import React, { useState } from "react"
import styles from "./Box/Box.module.css"

function ChooseColor(props) {

    const {
        color, setColor,
        radius, setRadius,
        shadowColor, setshadowColor,
        shadowHorizontal, setshadowHorizontal,
        shadowVertical, setshadowVertical,
        shadowBlur, setshadowBlur,
    } = props;

    return (
        <>
            <h1>Color Picker</h1>
            <div
                className={styles.box}
                style={{
                    backgroundColor: color,
                    borderRadius: radius,
                    boxShadow: `${shadowHorizontal} ${shadowVertical} ${shadowBlur} ${shadowColor}`
                }}>
            </div>

            <div className={styles.main}>
                <div className={styles.indicator}>
                    <p>Background Color: {color}</p>
                    <input type="color" value={color} onChange={(event) => setColor(event.target.value)} />
                </div>
                <div className={styles.indicator}>
                    <p>Radius: {`${radius}`}</p>
                    <input type="range" value={parseInt(radius)} onChange={(event) => setRadius(`${event.target.value}px`)} />
                </div>
                <div className={styles.indicator}>
                    <p>Shadow Color: {shadowColor}</p>
                    <input type="color" value={shadowColor} onChange={(event) => setshadowColor(event.target.value)} />
                </div>
                <div className={styles.indicator}>
                    <p>Horizontal: {`${shadowHorizontal}`}</p>
                    <input type="range" value={parseInt(shadowHorizontal)} onChange={(event) => setshadowHorizontal(`${event.target.value}px`)} />
                </div>
                <div className={styles.indicator}>
                    <p>Vertical: {`${shadowVertical}`}</p>
                    <input type="range" value={parseInt(shadowVertical)} onChange={(event) => setshadowVertical(`${event.target.value}px`)} />
                </div>
                <div className={styles.indicator}>
                    <p>Blur: {`${shadowBlur}`}</p>
                    <input type="range" value={parseInt(shadowBlur)} onChange={(event) => setshadowBlur(`${event.target.value}px`)} />
                </div>
            </div>
        </>
    );
}

export default ChooseColor