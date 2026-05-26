const QuizBuilder = {

    inputQuestion:
        document.getElementById("input-question"),

    choiceA:
        document.getElementById("choice-a"),

    choiceB:
        document.getElementById("choice-b"),

    choiceC:
        document.getElementById("choice-c"),

    choiceD:
        document.getElementById("choice-d"),

    correctAnswer:
        document.getElementById("correct-ans"),

    btnAdd:
        document.getElementById("btn-add"),

    previewList:
        document.getElementById("preview-list"),

    previewCount:
        document.getElementById("preview-count"),


    quizDeck: [],



    validateInputs(){

        if(
            this.inputQuestion.value.trim() === "" ||
            this.choiceA.value.trim() === "" ||
            this.choiceB.value.trim() === "" ||
            this.choiceC.value.trim() === "" ||
            this.choiceD.value.trim() === "" ||
            this.correctAnswer.value.trim() === ""
        ){

            alert(
                "Please fill all fields"
            );

            return false;
        }

        return true;
    },



    createQuestionObject(){

        return {

            question:
                this.inputQuestion.value,

            // FIXED: Transformed from an Object into an Array to match presenter loop mappings
            choices: [
                this.choiceA.value,
                this.choiceB.value,
                this.choiceC.value,
                this.choiceD.value
            ],

            // FIXED: Renamed property from correctAnswer to correctChoice to sync with QuizEngine
            correctChoice:
                this.correctAnswer.value
        };
    },



    clearInputs(){

        this.inputQuestion.value = "";

        this.choiceA.value = "";

        this.choiceB.value = "";

        this.choiceC.value = "";

        this.choiceD.value = "";

        this.correctAnswer.value = "a";
    },



    updatePreviewPanel(){

        this.previewCount.textContent =
            this.quizDeck.length;


        this.previewList.innerHTML = "";


        this.quizDeck.forEach(
            (questionObject,index) => {

                const questionCard =
                    document.createElement("div");


                questionCard.innerHTML = `

                    <h4>
                        Q${index + 1}:
                        ${questionObject.question}
                    </h4>

                    <p>
                        Correct Answer:
                        ${questionObject.correctChoice.toUpperCase()}
                    </p>

                    <hr>
                `;


                this.previewList.appendChild(
                    questionCard
                );
            }
        );
    },



    addQuestion(event){

        event.preventDefault();


        if(!this.validateInputs()){

            return;
        }


        const questionObject =
            this.createQuestionObject();


        this.quizDeck.push(
            questionObject
        );


        console.log(this.quizDeck);


        this.updatePreviewPanel();

        this.clearInputs();

       
    },



    getQuizdeck(){

        return this.quizDeck;
    },



    initialize(){

        this.btnAdd.addEventListener(
            "click",
            (event) => {

                this.addQuestion(event);
            }
        );
    }
};


QuizBuilder.initialize();


export default QuizBuilder;