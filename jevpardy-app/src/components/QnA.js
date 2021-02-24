import React from 'react';
import '../QnA.css';
import { Route, Link, Redirect } from 'react-router-dom';


function QnA(props){
 

    const foundQuestion = props.questions.find(question=> {
         return question.id == props.match.params.id;     
    })


    return(
        <div>
            <br/>
        <div className= "tvBox">
          {props.apiDataLoaded && 
          <div className="tv">
          <div className="value"> 
              ${foundQuestion.value}
            <div/>  

            <div className= "question">
              {foundQuestion.question}
              </div>
            <div className="answer">
 
              Question:
                <br/> 
              What is {foundQuestion.answer}</div>
            </div>
          </div>}
          </div>
          <div className="answerButtons">
              <button className="right" onClick={props.addScore}>I got it RIGHT!</button>
             <div className="redirect">
                 <Link  to="/gameboard">Return to Gameboard</Link>
              </div>
              <button className="wrong"onClick={props.subtractScore}>I got it WRONG!</button>
          </div>
            <div className="playerOne">
                Player 1 
                <div>
                <input className="playerOneScore" type="integer" value={props.playerOne} />
                    
                </div>
            </div>
        </div>
    )
}

export default QnA;