import React, { useState } from 'react';
import "./Game.css";

export default function Trivia() {



    const questions = [
        {
            questionText: 'What was Tandem previous name?',
            answerOptions: [
                { answerText: 'Tandem', isCorrect: false },
                { answerText: 'Burger Shack', isCorrect: false },
                { answerText: 'Devmynd', isCorrect: true },
                { answerText: 'Extraordinary Humans', isCorrect: false },
            ],
            correct: 'Devmynd',


        },
        {
            questionText: `In Shakespeare's play Julius Caesar, Caesar's last words were...`,
            answerOptions: [
                { answerText: 'Iacta alea est!', isCorrect: false },
                { answerText: 'Vidi, vini, vici', isCorrect: false },
                { answerText: 'Et tu, Brute?', isCorrect: true },
                { answerText: 'Aegri somnia vana', isCorrect: false },
            ],
            correct: 'Devmynd',


        },
        {
            questionText: 'A group of tigers are referred to as:',
            answerOptions: [
                { answerText: 'Chowder', isCorrect: false },
                { answerText: 'Pride', isCorrect: false },
                { answerText: 'Ambush', isCorrect: true },
                { answerText: 'Destruction', isCorrect: false },
            ],
            correct: 'Devmynd',

        },
        {
            questionText: 'What is the top speed an average cat can travel?',
            answerOptions: [
                { answerText: '42 mph', isCorrect: false },
                { answerText: '13 mph', isCorrect: false },
                { answerText: '31 mph', isCorrect: true },
                { answerText: '9 mph', isCorrect: false },
            ],
            correct: 'Devmynd',

        },
    ]

    // .sort(
    //     () => 0.5 - Math.random()
    // );

    //state objects/ state variables
    const [currentQuestion, setCurrentQuestion] = useState(0) //useState(0) makes it start at the beginning of the array

    const [showScore, setShowScore] = useState(false) //boolean instead of number

    const [score, setScore] = useState(0)

    //changes the current question whenever button is clicked
    const handleAnswerButtonClick = (isCorrect) => {
        // const correct = questions[answerOptions].correct
        if (isCorrect === true) {
            alert("you got it!")
            setScore(score + 1);
        }
        if (isCorrect === false) {
            //alert("yikes almost tho!")
            //alert("That was incorrect. The correct answer is " + correctAnswer)
            alert(`yikes almost tho! The correct answer is ${JSON.stringify(questions[currentQuestion].correct)}`)
            // console.log(questions[1].answerText)
            console.log(`yikes almost tho! The correct answer is ${JSON.stringify(questions[currentQuestion].correct)}`)
            //alert(questions[currentQuestion].answerText)

        }




        // create variable to increments by 1
        const nextQuestion = currentQuestion + 1;
        //if there's still questions do display the questions
        if (nextQuestion < questions.length) {
            //changes the state object to whatever the next question is
            setCurrentQuestion(nextQuestion)
        }
        //else show score
        else {
            setShowScore(true)
            console.log(`thanks for finishing!`) //maybe component for end of quiz or results

        }

    }
    // console.log("outside", questions[0].questionText)
    //wrapped in ternary like the login component from capstone
    return (
        <div className='the__questions'>
            {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}

            {/* <p>{questions[0].questionText}</p> */}
            {showScore ? (
                <div className='score-section'>You scored {score} out of {questions.length}</div>
            ) : (
                    <>
                        <div className='question-section'>


                            {/* <div className='question-text'>{questions[currentQuestion].questionText}</div> */}
                            <div className='question-text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className='answer-section'>
                            {questions[currentQuestion].answerOptions.map((answerOption, key) => <div key={key} className="question__options"><button className="questions__button" key={key} onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button><br /></div>)}

                        </div>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                    </>
                )}
        </div>
    );
}