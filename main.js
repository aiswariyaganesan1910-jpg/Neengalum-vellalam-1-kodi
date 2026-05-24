const designView = document.getElementById('design-view');
const testView = document.getElementById('test-view');
const resultView = document.getElementById('result-view');

const btnStart = document.getElementById('btn-start');
const btnEnd = document.getElementById('btn-end');
const btnRestart = document.getElementById('btn-restart');

btnStart.addEventListener('click', () => {
    designView.classList.add('hidden');
    testView.classList.remove('hidden');
});

btnEnd.addEventListener('click', () => {
    testView.classList.add('hidden');
    resultView.classList.remove('hidden'); 
});

btnRestart.addEventListener('click', () => {
    resultView.classList.add('hidden'); 
    designView.classList.remove('hidden');
});
