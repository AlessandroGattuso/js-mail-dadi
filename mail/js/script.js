let btn = document.querySelector("button");
const listEmail = ["alex@gmail.com", "meeseeks2015@outlook.it", "techcompany@gmail.com"];
let flag;

flag = false;

btn.addEventListener("click", function(){
  for(let i = 0; i < listEmail.length; i++){
    if(document.querySelector("input").value == listEmail[i]){
        flag = true;
        break;
    }
  }
  if(flag){
    document.querySelector("#answer").classList += " text-success";
    document.querySelector("#answer").innerText = "Email verificata";
  } 
  else{
    document.querySelector("#answer").classList += " text-danger";
    document.querySelector("#answer").innerText = "L'email che hai inserito non esiste";
  }

  flag = false;
})
