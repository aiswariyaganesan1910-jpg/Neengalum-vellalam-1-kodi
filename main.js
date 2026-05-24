// 1. Get references to your views
const designView = document.getElementById('design-view');
const testView = document.getElementById('test-view');

// 2. Get reference to the "Start Test" button
const btnStart = document.getElementById('btn-start');

// 3. Listen for the click event
btnStart.addEventListener('click', () => {
    // Hide the Design View by adding the 'hidden' class
    designView.classList.add('hidden');
    
    // Show the Test View by removing the 'hidden' class
    testView.classList.remove('hidden');
    
    // (Optional) You would also trigger code here to load the first question!
});