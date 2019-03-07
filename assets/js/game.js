let questions = [{
    question: "Which javascript method deletes the first item from an array?",
    choices: ["pop()", "push()", "prepend()", "shift()"],
    correctAnswer: 3,
}, {
    question: "What javascript library uses the $ symbol and document.ready function?",
    choices: ["node", "jquery", "react", "angular"],
    correctAnswer:1,
}, {
    question: "What is the structure of an arrow function  with no parameters?",
    choices: ["function() => {}", "function(){}", "() => {}", "none of these"],
    correctAnswer: 2,
}, {
    question: "What does JSON stand for?",
    choices: ["Javascript Object Notation", "Java system on", "Javascript's other name", "Join some other noobs  "],
    correctAnswer: 0,
}];

let  score = 0;

function renderQuiz(){
    $(".endscreen").hide();
    $(".startscreen").hide()
    $(".quiz").show();
    for (let i = 0; i < questions.length; i++) {

        let question = $("<form>");
        question.attr("qNum",[i]);
        question.attr("c-value",questions[i].correctAnswer);
        let questionText = $("<h1>");

        questionText.text(questions[i].question);
        questionText.attr("class", "question");

        question.append(questionText);
        $(".questions").append(question);

        for(let j = 0; j < questions[i].choices.length;j ++){
            let answerText = questions[i].choices[j]; 
            let answer = $("<input>");
            let answerLabel = $("<label>"); 
            
            if(questions[i].correctAnswer === j){
                answer.attr("correct",true);
               
            }

            answer.attr("type", "radio");
            answer.attr("id", answerText);
            answer.attr("name", "answertext");
            answer.attr("class", "answerRadio");

            answerLabel.attr("for", answerText); 
            answerLabel.attr("class", "answerLabel"); 
            answerLabel.text(answerText);

            question.append(answer);
            question.append(answerLabel)
           
        }    
    }
}

function initialize(){
    $(".quiz").hide();
    $(".startscreen").show();
    $("#startButton").on("click",function(){
        renderQuiz();
        setTimeout(check, 5 * 1000);
    });
}

function check(){
   
    let userAnswer =  $(".answerRadio:checked");
 
    for(let k = 0; k < userAnswer.length;k++){
     let userTrue = userAnswer[k].attributes.correct;
     if(userTrue){
         score++;
     }
    }
    $(".quiz").hide();
    $(".endscreen").show();
 
    $(".score").text("You got " +  score + " Correct");
 
    console.log(score);
}

// $("#subButton").on("click", function(event){
//     event.preventDefault();
//    let userAnswer =  $(".answerRadio:checked");

//    for(let k = 0; k < userAnswer.length;k++){
//     let userTrue = userAnswer[k].attributes.correct;
//     if(userTrue){
//         score++;
//     }
//    }
//    $(".quiz").hide();
//    $(".endscreen").show();

//    $(".score").text("You got " +  score + " Correct");

//    console.log(score);
// });

initialize();


