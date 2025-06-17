import React from "react";
import Flashcard from "./Flashcard";
import { useState } from "react";

const FlashcardList = () => {
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

    let [index, setIndex] = useState(0);

    // modulo wrap-around behavior
    const handleButton = () => {
        setIndex(
            index = (index + 1) % 10
        );
    };

    return (
        <div>
            <Flashcard question={flashcardList[index].question} answer={flashcardList[index].answer} color={flashcardList[index].color}/>
            <button className="nextCard" onClick={handleButton}>
                →
            </button> 
        </div>
        
    );
};

export default FlashcardList;