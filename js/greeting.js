// const form = document.querySelector(".js-form"),
//       input = form.querySelector("input"),
//       greetings = document.querySelector(".js-greetings");

// const user_LS = "currentUser",
//       showing_ON = "showing";

// function saveName(text){
//     localStorage.setItem(user_LS, text);
// }

// function askForName(){
//     form.classList.add(showing_ON);
//     form.addEventListener("submit", handleSubmit);
// }

// function handleSubmit(){
//     event.preventDefault();
//     const currentValue = input.value;
//     paintGreeting(currentValue);
//     saveName(currentValue);
// }

// function paintGreeting(text){
//     form.classList.remove(showing_ON);
//     greetings.classList.add(showing_ON);
//     greetings.innerText = `Hello ${text}`;
// }

// function loadName(){
//     const currentUser = localStorage.getItem(user_LS);
//     if (currentUser === null){
//         //He or She is not
//         askForName();
//     } else {
//         paintGreeting(currentUser);
//     }
// }


// function init(){
//     loadName();
// }
// init();

const form = document.querySelector(".js-form"),
      input = form.querySelector("input"),
      greetings = document.querySelector(".js-greetings");

const user_LS = "currentUser";

function saveUserName(text){
    localStorage.setItem(user_LS, text);
}


function handleSubmit(){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveUserName(currentValue);
}

function askForName(){
    form.classList.add("showing");
    form.addEventListener("submit",handleSubmit);
}

function paintGreeting(text){
    greetings.innerText = `Hello ${text}`;
    form.classList.remove("showing");
    greetings.classList.add("showing");
}

function loadName(){
    const currentUser = localStorage.getItem(user_LS); 
    if( currentUser === null ){
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}


function init(){
    loadName();
}
init();