import QuizBuilder from './quizBuilder.js'

const QuizEngine = {
    quizDeck: [],
    score : 0,
    startEngine(quizList){
        this.quizDeck = quizList;
        this.score = 0;
    },

    checkAnswer(qIndex,userChoice) {
        const currentQues = this.quizDeck[qIndex];

        if (currentQues.correctChoice == userChoice) {
            this.score++;
            return true;
        }
        else {
            return false;
        }
    },

    nextQuestion(qIndex){
        if(qindex + 1 === this.quizDeck.length){
             const buttonNext = document.getElementById("btn-next");
             buttonNext.classList.add('Hidden')
        }
        else if (qIndex < this.quizDeck.length) {
            return this.quizDeck[qIndex];
        }
        else {
            return false;
        }
    }
}

export default QuizEngine;
