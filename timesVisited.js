let timesVisited = 1;
if(!localStorage.getItem("timesvisted")){
  localStorage.setItem("timesvisited", timesVisited);
  alert("You visited " + localStorage.getItem("timesVisited" + " time(s)";
}else{
 timesVisited+=1;
 alert("You visited this page " + localStorage.getItem("timesvisited") + " times");
}
