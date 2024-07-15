import React, { useState } from "react"

function Test() {

    const [text, setText] = useState("");
    const [num, setNum] = useState(0);
    const [selected, setSelected] = useState("Please Select Any");

    return (
        <>
            <input type="text" name="" id="" value={text} onChange={(event) => setText(event.target.value)} />
            <h1>Output: {text}</h1>
            <input type="number" name="" id="" value={num} onChange={(event) => setNum(event.target.value)} />
            <h1>Number: {num}</h1>
            <label>
                <input
                    type="radio"
                    name="options"
                    id=""
                    value="Option 1"
                    checked={selected === "Option 1"}
                    onChange={(event) => setSelected(event.target.value)}
                />
                Option 1
            </label><br />
            <label>
                <input
                    type="radio"
                    name="options"
                    id=""
                    value="Option 2"
                    checked={selected === "Option 2"}
                    onChange={(event) => setSelected(event.target.value)}
                />
                Option 2
            </label><br />
            <label>
                <input
                    type="radio"
                    name="options"
                    id=""
                    value="Option 3"
                    checked={selected === "Option 3"}
                    onChange={(event) => setSelected(event.target.value)}
                />
                Option 3
            </label><br />
            <p>Select: {selected}</p>
        </>
    );
}

export default Test