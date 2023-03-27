// counting function
let data = 0;
document.getElementById("display").innerText = data;

function Increase(){
 data += 1;
 document.getElementById("display").innerText = data

}
function Decrease(){
  data -= 1;
  document.getElementById("display").innerText = data
 
 }
 function reset(){
  data = 0;
  document.getElementById("display").innerText = data
 
 }

