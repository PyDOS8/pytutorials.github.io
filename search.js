function search(){
  var searchValue = document.getElementById("search").value;
  if(!searchValue == ""){
     window.location.assign("https://pytutorials.github.io/" + searchValue);
  }else{
    alert("Enter a page");
  }
}
