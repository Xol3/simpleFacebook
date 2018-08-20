var database = [
  {
    userName: "pancho",
    password: "poblano1337"
  },
  {
    userName: "sigrid",
    password: "12345"
  },
  {
    userName: "esmeralda",
    password: "summer18"
  },

];

var newsFeed = [
  {
    userName: "Virgan",
    timeline: "saquen los qintoniles"
  },
  {
    userName: "Leo",
    timeline: "Miren mis servilletas"
  }
]
function isUserValid(username, password){
  for(var i = 0; i < database.length; i++){
    if(database[i].userName === username && database[i].password === password){
      return true;
    }
  }
  return false;
}

function signIn(username, password){
  // console.log(isUserValid(username, password));
  if(isUserValid(username, password)){
    console.log(newsFeed);
  }else{
    alert("sorry, wrong username and password");
  }
}

var userNamePrompt = prompt("userName");
var passwordPrompt = prompt("password");



signIn(userNamePrompt, passwordPrompt);
