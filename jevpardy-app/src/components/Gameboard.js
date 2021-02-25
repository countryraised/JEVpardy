import React from 'react';
import { Link } from 'react-router-dom';

import Footer from './Footer';
import '../Gameboard.css'

function Gameboard(props){

    const catOne = props.questions.filter(question => question.category_id === props.questions[0].category_id);{
    console.log(catOne)}

    const catTwo = props.questions.filter(question => question.category_id === props.questions[30].category_id);{
        console.log(catTwo)}
        
    const catThree = props.questions.filter(question => question.category_id === props.questions[28].category_id);{
        console.log(catThree)}

    const catFour = props.questions.filter(question => question.category_id === props.questions[3].category_id);{
        console.log(catFour)}

    const catFive = props.questions.filter(question => question.category_id === props.questions[55].category_id);{
        console.log(catFive)}

    const quesArray = [catOne, catTwo, catThree, catFour, catFive]
        console.log(quesArray);

    return(
      <div> 
           <div className="gameboard" >Let's play JEVpardy!</div>

        <div className='board'>
            {props.apiDataLoaded ?
                <div className='gbcontainer'>
                    {/* <div > */}
                        
                        {/* <div className='catbox'>
                            {props.questions[0].category.title}
                        </div>
                        <div className='catbox'>
                            {props.questions[1].category.title}
                        </div>
                        <div className='catbox'>
                            {props.questions[2].category.title}
                        </div>
                        <div className='catbox'>
                            {props.questions[3].category.title}
                        </div>
                        <div className='catbox'>
                            {props.questions[4].category.title}
                        </div> */}
                        

                        {/* <div className='categRow'>
                            {props.questions.slice(0, 5).map(question=> <div className='box'><div className='catbox'>{question.category.title}</div></div>)}
                        </div> */}

                        <div className='categRow'>
                            {quesArray.map(question => <div className='box'><div className='catbox'>{question[0].category.title}</div></div>)}
                        </div>


                    {/* </div>    */}


                        {/* <div>
                            {let catOne = props.questions.filter(question => question.category_id == props.questions[0].category_id)}
                        </div> */}
                        
                        {/* {function catMatch() {
                            return props.questions[0].category_id === catOne.category_id
                        }} */}

                        {/* { catOne = props.questions.filter(props.questions.category_id === props.questions[0].category_id);
                        <div>{catOne}</div> } */}

                        {/* <div>
                            {let catOne = props.questions.filter(question => question.category_id == props.questions[0].category_id)}
                        </div> */}

                    <div className='quesBox'>

                        <div className='colOne'>
                            {catOne.map(question => <div className='box'><Link to={`/QnA/${question.id}`}  ><div className='blueTv' key={question.id}>{question.value}</div></Link></div>)}
                        </div>

                        <div className='colTwo'>
                            {catTwo.map(question => <div className='box'><Link to={`/QnA/${question.id}`}  ><div className='blueTv' key={question.id} >{question.value}</div></Link></div>)}
                        </div>

                        <div className='colThree'>
                            {catThree.map(question => <div className='box'><Link to={`/QnA/${question.id}`}  ><div className='blueTv' key={question.id} >{question.value}</div></Link></div>)}
                        </div>

                        <div className='colFour'>
                            {catFour.map(question => <div className='box'><Link to={`/QnA/${question.id}`}  ><div className='blueTv' key={question.id} >{question.value}</div></Link></div>)}
                        </div>

                        <div className='colFive'>
                            {catFive.map(question => <div className='box'><Link to={`/QnA/${question.id}`}  ><div className='blueTv' key={question.id} >{question.value}</div></Link></div>)}
                        </div>

                        {/* <div className='colFive'>
                            {catFive.map(question => <div className='box'>{this.onClick ? <Link to={`/QnA/${question.id}`}  ><div className='blueTv' key={question.id} >{question.value}</div></Link> : <a><div className='blueTv' key={question.id} >{question.value}</div></a>}</div>)}
                        </div> */}

                    </div>
                        
                </div>
            : <p>data not loaded</p> }

            </div>             
            <div className="playerOne">
                Score 
                <div>
                <input className="playerOneScore" type="integer" value={props.playerOne} />
                    {/* Because Jeff can't make this work */}
                </div>
            </div>
        </div>
    )
}

export default Gameboard;