import styles from "./QuestionSummary.module.css";
import React from 'react';


let QuestionSummary = (props) =>{
    let no = props.questionNum;
    let result = null;
    let finalClass = null;
    if(!props.question.ans)
    {
        finalClass = styles.unans;
        result = "unanswered";
    }
    else if(props.question.correct)
    {
        finalClass = styles.correct;
        result = "Correct";
    }
    else {
        finalClass = styles.wrong;
        result = "Wrong";
    }
    return(
        <div className={`${styles.question} ${finalClass}`}>
        {props.questionNum}. {result} 
        </div>
    )
} 

export default QuestionSummary;