var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul =  document.querySelector("ul");

function inputL(){
  return input.value.length;
}

function createListElement(){
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick(){
  if(inputL() > 0){
    createListElement();
}
}

function addListAfterKeypress(event){
  if(inputL() > 0 && event.keyCode === 13){
    createListElement();
}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
