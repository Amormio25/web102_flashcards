import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Flashcard = ( {question, answer, color, answerShowing, toggleAnswer } ) => {
    const [cardColor, setCardColor] = useState(color);

    useEffect(() => {
        setCardColor(color);
    }, [color]);

    const handleClick = () => {
        toggleAnswer();
        const match = cardColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+),\s*[\d.]+\)/);
        if (match) {
            const [_, r, g, b] = match;
            const currentAlpha = cardColor.endsWith(", 1)") ? 1 : 0.5;
            const newAlpha = currentAlpha === 1 ? 0.5 : 1;
            setCardColor(`rgba(${r}, ${g}, ${b}, ${newAlpha})`);
        }
    }

    return (
        <div 
            className="card" 
            onClick={handleClick} 
            style={{ backgroundColor: cardColor, transition: "opacity 0.2s ease"}}
        >
            {answerShowing ? answer : question}
        </div>
    );
};

export default Flashcard;