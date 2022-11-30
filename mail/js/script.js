// Array of emails
const listEmail = ["alex@gmail.com", "meeseeks2015@outlook.it", "techcompany@gmail.com"];
// btn from html page
let btn = document.querySelector("button");     
// Flag that will allow us to say if the email is in the array
let flag;

flag = false;  

btn.addEventListener("click", function(){
  
  //Scroll through the array and search if the user's input exist in the array
  for(let i = 0; i < listEmail.length; i++){
    if(document.querySelector("input").value == listEmail[i]){
        flag = true;    //if input's user is inside the array we set flag to true
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

  flag = false; //At the end we set flag = false because if the user click the btn again this flag must not be true
})
