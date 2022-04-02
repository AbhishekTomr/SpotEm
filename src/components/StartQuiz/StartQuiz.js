import Button from '../UI/Button/Button'
import styles from './StartQuiz.module.css'
import Input from '../UI/Input/Input'
import {useDispatch, useSelector} from 'react-redux';
import { useState } from 'react';
import UserActions from '../../store/userslice'
import React from 'react';
import quetionsList from '../../store/dataItem'

let StartQuiz = (props) =>{ 
    let dispatchFn = useDispatch();
    let id = useSelector((state)=>state.userInfo.length+1); 
    let [uname,changeUname] = useState(''); //state for username
    let [ques,changeQues] = useState (10); // state for  number of questions
    let quesList = [];

    let ValidateMe = (element1,type) => {
        if(type=='text')
        {
            changeUname(element1.value);
            if(element1.value.trim().length==0)
            {
                element1.classList.add(styles.invalid);
                return false;
            }
            else{
                element1.classList.remove(styles.invalid);
                return true;
            }
        }
        if(type=='num'){
        changeQues(element1.value);
        if(element1.value=='' || element1.value>10 || element1.value<1)
        {
            element1.classList.add(styles.invalid);
            return false;
        }
        else{
            element1.classList.remove(styles.invalid);
            return true;
            
        }
        }
    }

   

    let startGame = () => {
        let inpName = document.getElementById('user-name');
        let inpQues = document.getElementById('ques');
        console.log(inpName,inpQues);
        if(!ValidateMe(inpName,'text'))
        {
            inpName.focus();
        }
        else if(!ValidateMe(inpQues,'num'))
        {
            inpQues.focus();
        }
        else{
            props.startQuiz(1);
            console.log("questions",quetionsList);
            for(let i = 0;i<ques;i++)
            {
                let q = quetionsList[i];
                quesList.push(q);
            }
            console.log("here is queslist",quesList);
            let newUser = {
            id : id,
            uname : uname,
            gameState : 1,
            questions : ques,
            questionsList : quesList
        }
        props.player(id);
        dispatchFn(UserActions.setData({newUser}))
        }
    }
    return(
            <div className={styles["start-info"]}>
            <div className={`${styles.user} ${styles.feild}`}>
            <label htmlFor='user-name'>User Name : </label>
            <Input data={{type:'text',id:'user-name',name:'user-name',className:styles.inp,value:uname,onBlur:(e)=>{ValidateMe(e.target,'text')},onChange:(e)=>{ValidateMe(e.target,'text')}}}></Input>
            </div>
            <div className={`${styles.ques} ${styles.feild}`}>
            <label htmlFor='ques'>No of Questions : </label>
            <Input data={{type:'number',min:1,max:10,id:'ques',name:'ques',className:styles.inp,value:ques,onBlur:(e)=>{ValidateMe(e.target,'num')},onChange:(e)=>{ValidateMe(e.target,'num')}}}></Input>
            </div>
            <Button data = {{'type':'button','className': styles.btn, onClick: startGame}}>Start Quiz</Button>
            </div>
    )
} 

export default StartQuiz;