import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion.js';
import QuizEnd from './QuizEnd.js';

let quizData = require('./quiz_data.json');


class Quiz extends Component {

    constructor(props) {
        super(props);
        this.state = { quiz_position: 1 };
    }
    showNextQuestion(){
        this.setState(prevState=>{
            quiz_position: prevState.quiz_position+1
        });
    }
    render() {
       const {quiz_position} = this.state;
       const isQuizEnd= quiz_position-1 === quizData.quiz_questions.length;
        return (
            <div>
               {isQuizEnd? <QuizEnd/>:null}
               <QuizQuestion quiz_question={quizData.quiz_questions[quiz_position-1]} 
                            showNextQuestionHandler={this.showNextQuestion.bind(this)}/>
            </div>
        )
    }
}

export default Quiz