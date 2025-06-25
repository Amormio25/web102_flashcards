import React from "react";
import { useState, useRef, useEffect } from "react";

const Guessing = ( { answer, answerShowing, inputValue, setInputValue, handleStreak } ) => {

    const [resultState, setResultState] = useState("normal")
    const inputRef = useRef();

    const handleClick = () => {
        if (!answerShowing) {
            setResultState(
                (answer.includes(inputRef.current.value.toLowerCase()) ? "correct" : "incorrect")
            );
            handleStreak(answer.includes(inputRef.current.value.toLowerCase()));
        }
    };

    useEffect(() => {
        setResultState("normal");
      }, [answer]);

    return (
        <div className="guessBox">
            Guess the Answer Here:
            <input 
                className={resultState}
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                type="text" 
                name="answer" 
                placeholder="Array"
            />
            <button 
                className="submit"
                onClick={handleClick}
                disabled={answerShowing}
            >
                Submit
            </button>
        </div>
    );
};

export default Guessing;