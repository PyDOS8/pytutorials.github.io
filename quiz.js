var answers_correct = 0;
function increase_correct(){
  return answers_correct+1;
}
function checkbox_checked(){
  let ans = document.querySelector("input[id=ans]:checked");
  try{
    if(ans == null){
      throw "Check a checkbox!";
    }else{
      check_answer();
    }
  }catch(e){
     document.write(e);
  }
}
function check_answer(){
    let ans = document.querySelector("input[name=check]:checked");
    if (ans.value != 4) {
      var h1 = document.createElement("h1");
      h1.innerText = "Try Again!";
      h1.id = "header";
      document.body.appendChild(h1);
    }
    if (ans.value == 4) {
      var h1 = document.createElement("h1");
       h1.innerText = "Correct!";
       h1.id = "header";
       document.body.appendChild(h1);
    }
}
