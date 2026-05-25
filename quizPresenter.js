import QuizEngine from './quizEngine.js';

const quizPresenter = {
    currentIndex: 0,

    renderQuestion() {
        const choicesContainer = document.getElementById("display-choices");
        const nextButton = document.getElementById("btn-next");
        
        const labels = choicesContainer.querySelectorAll('label');
        nextButton.disabled = true;

        const currentQ = QuizEngine.nextQuestion(this.currentIndex);
        if (!currentQ) {
            document.getElementById("test-view").classList.add("hidden");
            document.getElementById("result-view").classList.remove("hidden");
            document.getElementById("final-score").textContent = `${QuizEngine.score} / ${QuizEngine.quizDeck.length}`;
            return;
        }
        
        document.getElementById("display-question").textContent = currentQ.question;
        document.getElementById("ques-tracker").textContent = `Question ${this.currentIndex + 1} of ${QuizEngine.quizDeck.length}`;
        document.getElementById("live-score").textContent = `score: ${QuizEngine.score}`;
        
        labels.forEach(label => {
            label.className = ''; 
        });

        const keys = ['a', 'b', 'c', 'd'];
        labels.forEach((label, index) => {
            const letter = keys[index];
            const choiceText = currentQ.choices[index];
            label.innerHTML = `<input type="radio" name="options" value="${letter}"/> <strong>${letter.toUpperCase()}:</strong> ${choiceText}`;
        });
        
        nextButton.disabled = false;
    },

    handleAnswerSubmission() {
        const checkedRadio = document.querySelector('input[name="options"]:checked');
        
        if (!checkedRadio) {
            alert("Please select an option before moving to the next question!");
            return false;
        }
        
        const userChoice = checkedRadio.value;
        const choicesContainer = document.getElementById("display-choices");
        const labels = choicesContainer.querySelectorAll('label');
        const allRadios = choicesContainer.querySelectorAll('input[name="options"]');
        
        allRadios.forEach(radio => radio.disabled = true);

        const isCorrect = QuizEngine.checkAnswer(this.currentIndex, userChoice);
        const correctLetter = QuizEngine.quizDeck[this.currentIndex].correctChoice;
        
        labels.forEach(label => {
            const radioInput = label.querySelector('input');
            if (radioInput) {
                if (radioInput.value === correctLetter) {
                    label.classList.add('correct');
                }
                if (!isCorrect && radioInput.value === userChoice) {
                    label.classList.add('incorrect');
                }
            }
        });

        document.getElementById("live-score").textContent = `score: ${QuizEngine.score}`;
        return true; 
    },

    init() {
        this.currentIndex = 0;
        const nextButton = document.getElementById("btn-next");
        
        const cleanNextButton = nextButton.cloneNode(true);
        nextButton.replaceWith(cleanNextButton);
        
        cleanNextButton.addEventListener('click', () => {
            const answerSubmittedSuccessfully = this.handleAnswerSubmission();
            
            if (answerSubmittedSuccessfully) {
                cleanNextButton.disabled = true;
                setTimeout(() => {
                    this.currentIndex++;
                    this.renderQuestion();
                }, 1200);
            }
        });

        this.renderQuestion();
    }
};

export default quizPresenter;