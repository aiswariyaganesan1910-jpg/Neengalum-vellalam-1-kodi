import QuizBuilder from './quizBuilder.js';
import QuizEngine from './quizEngine.js';
import quizPresenter from './quizPresenter.js';

const designView = document.getElementById('design-view');
const testView = document.getElementById('test-view');
const resultView = document.getElementById('result-view');

const btnStart = document.getElementById('btn-start');
const btnEnd = document.getElementById('btn-end');
const btnRestart = document.getElementById('btn-restart');

btnStart.addEventListener('click', () => {
    const freshDeck = QuizBuilder.getQuizdeck();

    if (freshDeck.length === 0) {
        alert('Please add at least one question before starting the test!');
        return;
    }

    QuizEngine.startEngine(freshDeck);

    // 3. Shift panel visibility toggles
    designView.classList.add('hidden');
    testView.classList.remove('hidden');

    // 4. Fire initialization pipeline loops
    quizPresenter.init();
});

btnEnd.addEventListener('click', () => {
    testView.classList.add('hidden');
    resultView.classList.remove('hidden'); 
    document.getElementById("final-score").textContent = `${QuizEngine.score} / ${QuizEngine.quizDeck.length}`;
});

btnRestart.addEventListener('click', () => {
    // Hard reset the creator's dataset array memory so old items don't accumulate across games
    QuizBuilder.quizDeck = [];
    QuizBuilder.updatePreviewPanel();

    resultView.classList.add('hidden'); 
    designView.classList.remove('hidden');
});
