import React from "react";
import Flashcard from "./Flashcard";
import Guessing from "./Guessing";
import { useState, useEffect } from "react";

const FlashcardList = ( { handleStreak }) => {
    const flashcardList = [
        { question: "Which data structure implements First In First Out?", answer: "Queue", color: "rgba(255, 182, 193, 0.5)" },       
        { question: "Which data structure implements First In Last Out?", answer: "Stack", color: "rgba(176, 224, 230, 0.5)" },    
        { question: "Which data structure counts priority?", answer: "Priority Queue", color: "rgba(144, 238, 144, 0.5)" },        
        { question: "What is a Binary Search Tree?", answer: "Tree structure where each node has a max of 2 children", color: "rgba(255, 255, 224, 0.5)" }, 
        { question: "Which data structure uses pointers in a list?", answer: "Linked List", color: "rgba(255, 228, 196, 0.5)" },    
        { question: "Which heap has the root node as the max?", answer: "Max-Heap", color: "rgba(221, 160, 221, 0.5)" },             
        { question: "Which data structure uses key-value pairs?", answer: "Hash Table", color: "rgba(240, 230, 140, 0.5)" },          
        { question: "Which data structure is used in BFS?", answer: "Queue", color: "rgba(175, 238, 238, 0.5)" },                   
        { question: "Which data structure is used in DFS?", answer: "Stack", color: "rgba(255, 239, 213, 0.5)" },    
        { question: "Which list allows backward traversal?", answer: "Doubly Linked List", color: "rgba(240, 248, 255, 0.5)" }  
    ];

    const [index, setIndex] = useState(0);
    const [answerShowing, setAnswerShowing] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const handleButton = (direction) => {
        if ((index == 0 && direction == "prev") || (index == 9 && direction == "next")) {
            return;
        }
        setIndex((index) => (direction == "next" ? index + 1 : index - 1));
    };

    useEffect(() => {
        clearValue();
        setAnswerShowing(false);
    }, [index]);
      

    const toggleAnswer = () => setAnswerShowing((prev) => !prev);
    const clearValue = () => setInputValue("");

    return (
        <div>
            <Flashcard 
                question={flashcardList[index].question} 
                answer={flashcardList[index].answer} 
                color={flashcardList[index].color}
                answerShowing={answerShowing}
                toggleAnswer={toggleAnswer}
            />
            <button 
                onClick={() => handleButton("prev")}
                className={(index == 0) ? "disabled" : "enabled"}
            >
                ←
            </button> 
            <button 
                onClick={() => handleButton("next")} 
                className={(index == 9) ? "disabled" : "enabled"}
            >
                →
            </button> 
            <Guessing 
                answer={flashcardList[index].answer.toLowerCase()}
                answerShowing={answerShowing}
                inputValue={inputValue}
                setInputValue={setInputValue}
                handleStreak={handleStreak}
            />
        </div>
        
    );
};

export default FlashcardList;