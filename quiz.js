var answers_wrong;
var answers_correct;
if(!answers_wrong == 3){
   alert("Try again next time!");
   window.location.assign("https://pytutorials.github.io/");
}
function checkbox_checked(){
  let ans = document.querySelector("input[name=check]:checked");
  try{
    if(!ans){
      throw "Check all the boxes!";
    }else{
      check_answer();
    }
  }catch(e){
     var h1 = document.createElement("h1");
      h1.innerText = e;
      document.body.appendChild(h1);
  }
}
function check_answer(){
   let ans = document.querySelector('input[name=check]:checked');
   if (ans.value != 4) {
      var p = document.createElement("p");
      p.innerText = "Answers Correct/Wrong: " + answers_wrong + " /Correct: " + answers_correct;
      document.body.appendChild(p);
      answers_wrong = answers_wrong+1;
      if (ans.value == 4) {
         var h1 = document.createElement("h1")
         h1.innerText = "Correct!";
         document.body.appendChild(h1);
         answers_correct = answers_correct+1;
         var p = document.createElement("p");
         p.innerText = "Answers Correct/Wrong: " + answers_wrong + " /Correct: " + answers_correct;
         document.body.appendChild(p);
         answers_wrong = answers_wrong+1;
      }
   }
