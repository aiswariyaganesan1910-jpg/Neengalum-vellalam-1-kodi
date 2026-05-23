High Level Design Docs : NVOC
 =============================

## 1. Executive Summary

### 1.1 Project Overview

>To create an interactive quiz application which offers the following views:

1. **Design view** : Where user can create the questions.
2. **Test view** : Where user can test the questions themselves.

### 1.2 Scope

* **In Scope:** Quiz Designer view, Test view, Scoring

## 2. Architecture

### 2.1 Directory Structure

```text
├── index.html            # Main entry point
├── README.md             # Project Documentation
├── style.css             # Styles
├── quizBuilder.js        # Builds the quiz list
├── quizEngine.js         # Handles logic
└── quizPresenter.js      # Handles DOM interactions
 
 ```

## 3. Javascript Logic & Data Flow

### 3.1 Model quizDeck List

```js
  
const quizDeck = [
    {choices: [],correctChoice: "a",question: "What is Apple?"},
    {choices: [],correctChoice: "b",question: "What is  Peacock?"},
    {choices: [],correctChoice: "c",question: "What is School?"},
]

```

### 3.2 Core Module Function

#### Module 0 (main.js)



#### Module 1 (quizBuilder.js)

* Inputs
  * **User Data:** Data entered in the HTML input fields
* Imports
  * **None**
* Outputs
  * **Structured list:** Returns quizDeck which is a list of question objects
* Functions
  * **getQuizDeck():** returns the quizDeck list

```js
const QuizBuilder = {
    // Declare DOM varaibles
    quizDeck: [],

    getQuizDeck() {
      // returns the quizDeck
    }
}
```

#### Module 2 (quizEngine.js)

* Inputs
  * **Data Input:** quizDeck list from quizBuilder.js
* Imports
  * **Module 1:** quizBuilder.js
* Outputs
  * **Question data:** Each questions data, live scoring, and final score
* Functions
  * **checkAnswer(questionIndex, userChoice):** return true if answer's correct and false otherwise.
  * **nextQuestion(questionIndex):** returns question object if current question exists otherwise returns false

#### Module 3 (quizPresenter.js)

kskdajf
jb
funtion(ques,choices){
  kjav
  
  if (!mod2.nxtques(index)){
    final()
  }
  else{
    function(index)
  }
}

* Inputs
  * **Data Input:**  question objects from quizEngine.js
  * **User Input:** The user choices during test view
* Imports
  * **Module 2:** quizBuilder.js
* Outputs
  * **Question data:** Displays test view
* Functions
  * **checkAnswer(questionIndex, userChoice):** return true if answer's correct and false otherwise.
  * **nextQuestion(questionIndex):** returns question object if current question exists otherwise returns false
  




    - switch between test view and design view (main.js)
    - collect user data in design view (module 1)
    - collect user data in test view (module 3)
    - comparing correct and wrong answers (module 2)
    - present each object (module 3)
    
