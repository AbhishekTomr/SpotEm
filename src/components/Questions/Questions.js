import { Fragment, useEffect, useState,useRef } from 'react'
import styles from '../PlayQuiz/PlayQuiz.module.css'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input';
import {useDispatch} from 'react-redux';
import UserActions from '../../store/userslice'
import React from 'react';
import Image from '../UI/Image/Image'


let Question = (props) => {

    console.log("here are my props",props);
    let no = props.Qno;
    let img1 = props.Question.question[0];
    let img2 = props.Question.question[0];
    let ans = 1;
    
    let [ansInp,changeAnsInp] = useState('');
    let isFinal = (no==props.total-1)?true:false;
    let [isCorrect,changeIsCorrect] = useState(false);
    let [isIncorrect,changeIsIncorrect] = useState(false);
    let [isAnswered,changeIsAnswered] = useState(false);
    let dispatchFn = useDispatch();
    let next = useRef();
    let finish = useRef();
    let inp = useRef();

    let checkCorrect = (id) =>{
        if(isAnswered)
        {
            return;
        }
        if(id==ans)
        {
            changeIsAnswered(true);
            changeIsIncorrect(false);
            changeIsCorrect(true);
            
        }
        else{
            changeIsAnswered(true);
            changeIsIncorrect(true);
            changeIsCorrect(false);
        }

    }

    let Next = ()=>{
        dispatchFn(UserActions.changeAns({id:no,user:props.user,isAns:isAnswered}));
        dispatchFn(UserActions.changeCorrect({id:no,user:props.user,isCorrect:isCorrect}));
        props.nextQues();
    }
    

    useEffect(()=>{
        changeIsAnswered(false);
        changeIsCorrect(false);
        changeIsIncorrect(false);
    },[no]);
    return (
        <Fragment>
                <div id='quesNo' className={styles.questionNo}>Question Number : {no+1}</div>
                <div id='question' className={styles.question}>
                <Image src={img1.img} data={{onClick:()=>{checkCorrect(1)}}}></Image>
                <Image src={img2.img} data={{onClick:()=>{checkCorrect(2)}}}></Image>
                </div>
                <div id='correctAns' className={styles.correct}>
                {isCorrect && <p className={styles.correctAns}>Correct Answer !</p>}
                {isIncorrect && <p className={styles.wrongAns}>Wrong Answer </p>}
                </div>
                <div className={styles["btn-wrap"]}>
                {!isFinal && <Button data={{id:'nextQues',className:styles.btn,ref:next,onClick:Next}}>Next Question</Button>}
                {isFinal && <Button data={{id:'finishQues',className:styles.btn,ref:finish,onClick:Next}}>Finish Quiz</Button>}
                </div>
        </Fragment>
    )
}

export default Question;