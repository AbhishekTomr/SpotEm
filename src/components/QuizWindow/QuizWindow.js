import  styles  from './QuizWindow.module.css'
import StartQuiz from '../StartQuiz/StartQuiz'
import PlayQuiz from '../PlayQuiz/PlayQuiz'
import EndQuiz from '../EndQuiz/EndQuiz'
import { useState } from 'react'
import React from 'react';
let QuizWindow = () =>{
    let [quizState,changeQuizState] = useState(0); //state for gamestate
    let [currentPlayer,changePlayer] = useState(null); //state for player
    if(quizState===0) //start game panel
    {
        return(
        <div className={styles.QuizWindow}>
        <div className={styles["start-screen"]}>
            <StartQuiz startQuiz = {changeQuizState} gameState = {quizState} player={changePlayer}></StartQuiz>
        </div>
        </div>
        )
    }
    else if(quizState===1) //play game panel
    {   return(
        <div className={styles.QuizWindow}>
        <div className={styles["start-screen"]}>
        <PlayQuiz endQuiz = {changeQuizState} currentPlayer={currentPlayer}></PlayQuiz>
        </div>
        </div>
        )
    }
    else if(quizState===2) //end game panel
    {
        return(        
        <div className={styles.QuizWindow}>
        <div className={styles["start-screen"]}>
        <EndQuiz newQuiz = {changeQuizState} currentPlayer={currentPlayer} ></EndQuiz>
        </div>
        </div>)

    }
}

export default QuizWindow;
