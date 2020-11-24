import React, { useState } from 'react';
import "./Game.css";

export default function Trivia() {



    const questions = [
        {
            questionText: `What was Tandem's previous name?`,
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
            correct: 'Et tu, Brute?',


        },
        {
            questionText: 'A group of tigers are referred to as:',
            answerOptions: [
                { answerText: 'Chowder', isCorrect: false },
                { answerText: 'Pride', isCorrect: false },
                { answerText: 'Ambush', isCorrect: true },
                { answerText: 'Destruction', isCorrect: false },
            ],
            correct: 'Ambush',

        },
        {
            questionText: 'What is the top speed an average cat can travel?',
            answerOptions: [
                { answerText: '42 mph', isCorrect: false },
                { answerText: '13 mph', isCorrect: false },
                { answerText: '31 mph', isCorrect: true },
                { answerText: '9 mph', isCorrect: false },
            ],
            correct: '31 mph',

        },
        {
            questionText: 'A cat can jump to _____ times its own height:',
            answerOptions: [
                { answerText: '3', isCorrect: false },
                { answerText: '7', isCorrect: false },
                { answerText: '5', isCorrect: true },
                { answerText: '9', isCorrect: false },
            ],
            correct: '5',

        }, {
            questionText: `What is the only letter that doesn't appear in a US state name?`,
            answerOptions: [
                { answerText: 'M', isCorrect: false },
                { answerText: 'X', isCorrect: false },
                { answerText: 'Q', isCorrect: true },
                { answerText: 'Z', isCorrect: false },
            ],
            correct: 'Q',

        }, {
            questionText: 'What is the name for a cow-bison hybrid?',
            answerOptions: [
                { answerText: 'Cowson', isCorrect: false },
                { answerText: 'Bicow', isCorrect: false },
                { answerText: 'Beefalo', isCorrect: true },
                { answerText: 'Mooson', isCorrect: false },
            ],
            correct: 'Beefalo',

        }, {
            questionText: 'What is the largest freshwater lake in the world?',
            answerOptions: [
                { answerText: 'Wild Wild West', isCorrect: false },
                { answerText: 'War World Web', isCorrect: false },
                { answerText: 'World Wide Web', isCorrect: true },
                // { answerText: '9 mph', isCorrect: false },
            ],
            correct: 'World Wide Web',

        }, {
            questionText: 'In a game of bingo, what number is represented by the name two little ducks?',
            answerOptions: [
                { answerText: '20', isCorrect: false },
                { answerText: '55', isCorrect: false },
                { answerText: '22', isCorrect: true },
                { answerText: '77', isCorrect: false },
            ],
            correct: '22',

        }, {
            questionText: 'According to Greek mythology, who was the first woman on Earth?',
            answerOptions: [
                { answerText: 'Lilith', isCorrect: false },
                { answerText: 'Eve', isCorrect: false },
                { answerText: 'Pandora', isCorrect: true },
                { answerText: 'Hera', isCorrect: false },
            ],
            correct: 'Pandora',

        },
    ]

    //Future implementation: adding a sort method, so the same order of questions isn't repeated
    // .sort(
    //     () => 0.5 - Math.random()
    // );

    //state objects/ state variables
    const [currentQuestion, setCurrentQuestion] = useState(0) //useState(0) makes it start at the beginning of the array

    const [showScore, setShowScore] = useState(false) //boolean instead of number

    const [score, setScore] = useState(0)

    //changes the current question whenever button is clicked
    //informs user of correct answer
    const handleAnswerButtonClick = (isCorrect) => {
        if (isCorrect === true) {
            alert("you got it!")
            setScore(score + 1);
        }
        if (isCorrect === false) {
            alert(`yikes almost though! The correct answer is ${JSON.stringify(questions[currentQuestion].correct)}`)

        }




        // create variable to increment question by 1
        const nextQuestion = currentQuestion + 1;
        //if there's still questions, display the questions
        if (nextQuestion < questions.length) {
            //changes the state object to whatever the next question is
            setCurrentQuestion(nextQuestion)
        }
        //otherwise show score
        else {
            setShowScore(true)
            console.log(`thanks for finishing!`)

        }

    }
    // maybe add photos to each question + photo at the end with congrats or yikes
    //wrapped in ternary 
    return (
        <div className='the__questions'>

            {showScore ? (
                <div className='score-section'>You scored {score} out of {questions.length}!</div>
            ) : (
                    <>
                        <div className='question-section'>
                            <div className='question-text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className='answer-section'>
                            {questions[currentQuestion].answerOptions.map((answerOption, key) =>
                                <div key={key} className="question__options">
                                    <button
                                        className="questions__button"
                                        key={key}
                                        onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>
                                        {answerOption.answerText}
                                    </button>
                                    <br />
                                </div>
                            )}

                        </div>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                    </>
                )}
        </div>
    );
}