import styles from './Clock/Clock.module.css'
import React, {useState, useEffect} from 'react';

export default function Clock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >=12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${hours}:${includeZero(minutes)}:${includeZero(seconds)} ${meridiem}`;
    }

    function includeZero(number) {
        return( number < 10 ? "0" : "") + number;
    }

    return (
        <>
        <div className={styles.clockContainer}>
            <div className={styles.clock}>
                <span>{formatTime()}</span>
            </div>
        </div>
        </>
    );
}