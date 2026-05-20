import { Question } from "./question.js";
let questions = new Array();
let studentesAnswers = new Array(1000);
localStorage.setItem("currentquestion", -1);
localStorage.setItem("studentanswer", JSON.stringify([""]))

function isValidString(text) {
  if (text === "") return false;
  return true;
}
function isValidNumber(num) {
  if (num > 0) return true;
  return false;
}
class Exam {
  constructor() {}
  addNewQuestion(questiontype, text, correctAnswer, grade) {
    if (
      isValidString(questiontype) &&
      isValidString(text) &&
      isValidString(correctAnswer) &&
      isValidNumber(grade)
    ) {
      let stored = localStorage.getItem("localquestions");
      if (stored) {
        questions = JSON.parse(stored);
      }
      let newquestion = new Question(
        questions.length,
        text,
        correctAnswer,
        grade,
      );
      newquestion.type = questiontype;
      questions.push(newquestion);
      localStorage.setItem("localquestions", JSON.stringify(questions));
    }
  }
}
document.getElementById("btn-add-id").addEventListener("click",()=>{
//   document.getElementById("add-new-ques-id").classList.toggle("start-show");
   document.getElementById("add-new-ques-id").style.display="block";
});
document.getElementById("selc-question-id").addEventListener("change", (e) => {
  let selecttype = document.getElementById("selc-answer-id");
  let shortanswertype = document.getElementById("typ-correct-ans-id");

  if (e.target.value === "trfls") {
    selecttype.classList.add("type-correct-toggle");
    shortanswertype.classList.remove("type-correct-toggle");
  } else if (e.target.value === "short") {
    selecttype.classList.remove("type-correct-toggle");
    shortanswertype.classList.add("type-correct-toggle");
  }
});

document.getElementById("btn-submit-id").addEventListener("click", () => {
  let questiontype = document.getElementById("selc-question-id");
  let question = document.getElementById("typ-question-id");
  let selecttype = document.getElementById("selc-answer-id");
  let shortanswertype = document.getElementById("typ-correct-ans-id");
  let questiongrade = document.getElementById("typ-grade-id");
  let newQuestion = new Exam();
  if (questiontype.value.trim() === "trfls") {
    if (isValidString(selecttype)) {
      newQuestion.addNewQuestion(
        questiontype.value.trim(),
        question.value.trim(),
        selecttype.value.trim(),
        questiongrade.value,
      );
      questiontype.value = "";
      question.value = "";
      selecttype.value = "";
      questiongrade.value = "";
    }
  } else if (questiontype.value.trim() === "short") {
    if (isValidString(shortanswertype)) {
      newQuestion.addNewQuestion(
        questiontype.value.trim(),
        question.value.trim(),
        shortanswertype.value.trim(),
        questiongrade.value,
      );
      questiontype.value = "";
      question.value = "";
      shortanswertype.value = "";
      questiongrade.value = "";
    }
  }
   document.getElementById("add-new-ques-id").style.display="none";
});



let btnstart=document.querySelectorAll(".start-test");
btnstart.forEach((elment)=>{
    //console.log(elment);
    elment.addEventListener("click", () => {
        //console.log(elment);
  document.getElementById("questionscards-id").style.display="grid";
  document.getElementById("btn-next-prev-id").style.display="flex";
  document.getElementById("resultofanswers-id").style.display="none";
  let cardparent = document.getElementById("questionscards-id");
   cardparent.innerHTML=``;
  let storedquestions = JSON.parse(localStorage.getItem("localquestions"));

  //console.log(storedquestions);
  for (let i = 0; i < storedquestions.length; i++) {
    let frquesshow = "unanswerd-question";
    i===0?frquesshow = "toanswer-question":frquesshow = "unanswerd-question";
    console.log(storedquestions[i]);
    if (storedquestions[i].type === "trfls") {
        
      cardparent.innerHTML += `
             <div class="question-card ${frquesshow}" id="ques-card-${i}">

                    <div class="card-header">
                        <span class="question-num" id="question-num-id">Question ${i + 1} of <small>${storedquestions.length}</small></span>
                        <span class="exam-title">Tecnical Exam</span>
                    </div>

                    <h2 class="question" id="question-id">${storedquestions[i].text}?</h2>
                    <div class="answer-div">
                        <form class="frm-tf">
                                    <div>
                                        <input type="radio" class="tfanswer" name="radioanswer" id="answer-t-${i}" value="True">
                                        <label for="answer-t-id">True</label>
                                    </div>
                                    <div>
                                        <input type="radio" class="tfanswer" name="radioanswer" id="answer-f-${i}" value="False">
                                        <label for="answer-f-id">False</label>
                                    </div>
                        </form> 
                    </div>  
                </div>
                `;
    } else if (storedquestions[i].type === "short") {
      cardparent.innerHTML += `
                <div class="question-card unanswerd-question" id="ques-card-${i}">
                    <div class="card-header">
                        <span class="question-num" id="question-num-id">Question ${i + 1} of <small>${storedquestions.length}</small></span>
                        <span class="exam-title">Tecnical Exam</span>
                    </div>

                    <h2 class="question" id="question-id">${storedquestions[i].text}?</h2>
                    <div class="answer-div">
                        <input type="text" class="shortanswer" id="answer-${i}" placeholder="Type Your Answer Here...">
                    </div>  
                </div>
            `;
    }
  }

  let allradioanswer = document.querySelectorAll(".tfanswer");
  let allshortanswers = document.querySelectorAll(".shortanswer");
  allradioanswer.forEach((element) => {
    element.addEventListener("change", (e) => {
      let id = e.target.id.split("-")[2];
      if (e.target.checked) {
        studentesAnswers[id] = e.target.value;
        localStorage.setItem("studentanswer", JSON.stringify(studentesAnswers));
      }
    });
  });

  allshortanswers.forEach((element) => {
    element.addEventListener("change", (e) => {
      let id = e.target.id.split("-")[1];
      studentesAnswers[id] = e.target.value;
      localStorage.setItem("studentanswer", JSON.stringify(studentesAnswers));
    });
  });
});
})


document.getElementById("btn-next-id").addEventListener("click", () => {
  let curques = localStorage.getItem("currentquestion");
  //console.log(Number(curques)+Number(1));
  if (document.getElementById(`ques-card-${Number(curques) + Number(1)}`)) {
    let nextquestioncard = document.getElementById(
      `ques-card-${Number(curques) + Number(1)}`,
    );
    let questioncard = document.getElementById(`ques-card-${curques}`);
    // console.log(nextquestioncard);
    nextquestioncard.classList.add("toanswer-question");
    nextquestioncard.classList.remove("unanswerd-question");

    if (curques > -1) {
      questioncard.classList.add("answerd-question");
      questioncard.classList.remove("toanswer-question");
    }

    localStorage.setItem("currentquestion", Number(curques) + Number(1));
  } 
  else {
    
    document.getElementById("resultofanswers-id").style.display="block";
    document.getElementById("questionscards-id").style.display="none";
    document.getElementById("btn-next-prev-id").style.display="none";
    localStorage.setItem("currentquestion",-1);
    displaycorrectanswers();

  }
});
document.getElementById("btn-prev-id").addEventListener("click", () => {
  let curques = localStorage.getItem("currentquestion");
  //console.log(curques);
  if (document.getElementById(`ques-card-${Number(curques) - Number(1)}`)) {
    let prevquestioncard = document.getElementById(
      `ques-card-${Number(curques) - Number(1)}`,
    );
    let questioncard = document.getElementById(`ques-card-${curques}`);
    //    console.log(questioncard);
    //    console.log(prevquestioncard);
    if (curques > 0) {
      prevquestioncard.classList.add("toanswer-question");
      prevquestioncard.classList.remove("answerd-question");
    }
    questioncard.classList.add("unanswerd-question");
    questioncard.classList.remove("toanswer-question");

    localStorage.setItem("currentquestion", Number(curques) - Number(1));
  }
});

function displaycorrectanswers() {
  let storedquestions = JSON.parse(localStorage.getItem("localquestions"));
  let storedanswers = JSON.parse(localStorage.getItem("studentanswer"));
  let sum=0,total=0;
  let ansparent=document.getElementById("allquesandanswers-id");
  console.log(storedquestions);
  let prehtml = ``;
  for (let i = 0; i < storedquestions.length; i++) {
    prehtml += `<div class="queandanswer" id="queandanswer-${i}">`;
    if (storedanswers[i]!=null&&storedanswers[i].trim() == storedquestions[i].correctAnswer.trim()) {
      prehtml += `<h2>(Q ${i + 1}) ${storedquestions[i].text}?</h2>
                    <div class="evaluateans">
                        <h3>✅ Correct Answer</h3>
                        <h3>(${storedquestions[i].grade})</h3>
                    </div>
                    <div class="useranswer">
                            <p>${storedanswers[i].trim()}</p>
                    </div>
                </div>
            `;
            sum+=Number(storedquestions[i].grade);
    } else {
      prehtml += `<h2>(Q ${i + 1}) ${storedquestions[i].text}?</h2>
                    <div class="wrevaluateans">
                        <h3>❌ Wrong Answer</h3>
                        <h3>(0)</h3>
                    </div>
                    <div class="useranswer">
                            <p>${storedanswers[i]!=null?storedanswers[i].trim()+"(Your Answer)":"NO Answer Enter"} </p>
                            <p>${storedquestions[i].correctAnswer.trim()} (Correct Answer)</p>
                    </div>
                </div>
            `;
    }
    total+=Number(storedquestions[i].grade);
    
  }
  document.getElementById("h2-grade").innerText=`${sum}/${total}`
  ansparent.innerHTML=prehtml;
}
