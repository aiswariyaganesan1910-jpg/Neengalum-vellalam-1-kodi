import QuizBuilder from './quizBuilder.js'

const QuizEngine = {
    quizDeck: [],

    startEngine(quizList){
        this.quizDeck = quizList;
    },

    checkAnswer(qIndex,userChoice) {
        const currentQues = this.quizDeck[qIndex];

        if (currentQues.correctChoice == userChoice) {
            return true;
        }
        else {
            return false;
        }
    },

    nextQuestion(qIndex){
        if (qIndex < this.quizDeck.length) {
            return this.quizDeck[qIndex];
        }
        else {
            return false;
        }
    }
}

export default QuizEngine;