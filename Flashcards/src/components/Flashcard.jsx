import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Flashcard = (props) => {
    const [text, setText] = useState(props.question);
    const [color, setColor] = useState(props.color);

    useEffect(() => {
        setText(props.question);
        setColor(props.color);
    }, [props.question], [props.color]);

    const handleClick = () => {
        setText(
            (text == props.answer) ? props.question : props.answer
        );
        const match = props.color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+),\s*[\d.]+\)/);
        if (match) {
            const [_, r, g, b] = match;
            const currentAlpha = color.endsWith(", 1)") ? 1 : 0.5;
            const newAlpha = currentAlpha === 1 ? 0.5 : 1;
            setColor(`rgba(${r}, ${g}, ${b}, ${newAlpha})`);
        }
    }

    return (
        <div className="card" onClick={handleClick} style={{ backgroundColor: color, transition: "opacity 0.2s ease",}}>
            {text}
        </div>
    );
};

export default Flashcard;