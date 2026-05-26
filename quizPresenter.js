import QuizEngine from './quizEngine.js';

const quizPresenter = {
    currentIndex: 0,
    hasAnswered: false,

    renderQuestion() {
        const choicesContainer = document.getElementById("display-choices");
        const nextButton = document.getElementById("btn-next");
        
        const labels = choicesContainer.querySelectorAll('label');
        nextButton.disabled = true;
        this.hasAnswered = false; 

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

        // 🌟 NEW: Add instant feedback listener directly on choices container change
        // Clean out any old listeners by replacing the container node
        const cleanChoicesContainer = choicesContainer.cloneNode(true);
        choicesContainer.replaceWith(cleanChoicesContainer);

        cleanChoicesContainer.addEventListener('change', (e) => {
            if (e.target.name === 'options') {
                this.handleInstantFeedback(e.target.value, cleanChoicesContainer);
            }
        });
        
        nextButton.disabled = true; // Stay disabled until an answer is clicked!
    },

    // 🌟 NEW: Processes choices instantly upon a user click
    handleInstantFeedback(userChoice, container) {
        if (this.hasAnswered) return;
        this.hasAnswered = true;

        const nextButton = document.getElementById("btn-next");
        const labels = container.querySelectorAll('label');
        const allRadios = container.querySelectorAll('input[name="options"]');
        
        // Disable all radio options right away
        allRadios.forEach(radio => radio.disabled = true);

        const isCorrect = QuizEngine.checkAnswer(this.currentIndex, userChoice);
        const correctLetter = QuizEngine.quizDeck[this.currentIndex].correctChoice;
        
        // Apply your CSS green/red classes immediately
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

        // Update top-bar live scorecard display instantly
        document.getElementById("live-score").textContent = `score: ${QuizEngine.score}`;
        
        // Enable next button since they have completed this question
        nextButton.disabled = false;
    },

    init() {
        this.currentIndex = 0;
        const nextButton = document.getElementById("btn-next");
        
        const cleanNextButton = nextButton.cloneNode(true);
        nextButton.replaceWith(cleanNextButton);
        
       
        cleanNextButton.addEventListener('click', () => {
            cleanNextButton.disabled = true;
            this.currentIndex++;
            this.renderQuestion();
        });

        this.renderQuestion();
    }
};

export default quizPresenter;