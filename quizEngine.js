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
        if(qindex + 2 == this.quizDeck.length){
             
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
