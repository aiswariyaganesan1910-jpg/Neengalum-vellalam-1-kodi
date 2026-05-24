import QuizEngine from './quizEngine.js'

const quizPresenter = {
    currentIndex: 0,

    renderQuestion(){
        const choicesContainer = document.getElementById("display-choices");
        const nextButton = document.getElementById("btn-next")
        
        choicesContainer.innerHTML = "";
        nextButton.disabled = true;

        const currentQ = QuizEngine.nextQuestion(this.currentIndex);
        if(!currentQ){
            document.getElementById("test-view").classList.add("hidden");
            document.getElementById("result-view").classList.remove("hidden");
            document.getElementById("final-score").textContent = `${QuizEngine.score} / ${QuizEngine.length}`;
        }
        document.getElementById("display-question").textContent = currentQ.question;
        document.getElementById("ques-tracker").textContent = `Question ${this.currentIndex + 1} of ${QuizEngine.quizDeck.length}`;
        document.getElementById("live-score").textContent = `score: ${QuizEngine.score}`;
        
        const keys = ['a','b','c','d'];
        currentQ.choices.forEach((choiceText, index) => {
            const letter = keys[index];
            
        })
    }


}