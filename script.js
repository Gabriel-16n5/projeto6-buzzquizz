// Começo dos scripts Gabriel //
function page31to32(){
    let changeClass1 = document.querySelector('.page3-1');
    let changeClass2 = document.querySelector('.page3-2Full');
    changeClass1.classList.add('displayNone');
    changeClass2.classList.remove('displayNone');
}

function page32to33(){
    let changeClass1 = document.querySelector('.page3-2Full');
    let changeClass2 = document.querySelector('.page3-3Full');
    changeClass1.classList.add('displayNone');
    changeClass2.classList.remove('displayNone');
}

function page33to34(){
    let changeClass1 = document.querySelector('.page3-3Full');
    let changeClass2 = document.querySelector('.page3-4Full');
    changeClass1.classList.add('displayNone');
    changeClass2.classList.remove('displayNone');
}

function page34to21(){
    let changeClass1 = document.querySelector('.page3-4Full');
    let changeClass2 = document.querySelector('.page2');
    changeClass1.classList.add('displayNone');
    changeClass2.classList.remove('displayNone');
}

function hiddenQuizzToggle1(){
    document.getElementById("quizzBox321").style.display="none";
    let temp = document.querySelectorAll(".displayNoneBolado1");
    for(let i = 0; i<temp.length;i++){
        temp[i].classList.remove('displayNoneBolado1');
    }
}

function showQuizzToggle1(){
    document.getElementById("quizzBox321").style.display="flex";
    let temp = document.querySelectorAll(".displayNoneBolado2");
    for(let i = 0; i<temp.length;i++){
        temp[i].classList.add('displayNoneBolado1');
    }
}

function hiddenQuizzToggle2(){
    document.getElementById("quizzBox322").style.display="none";
    let temp = document.querySelectorAll(".displayNoneBolado3");
    for(let i = 0; i<temp.length;i++){
        temp[i].classList.remove('displayNoneBolado3');
    }
}

function showQuizzToggle2(){
    document.getElementById("quizzBox322").style.display="flex";
    let temp = document.querySelectorAll(".displayNoneBolado4");
    for(let i = 0; i<temp.length;i++){
        temp[i].classList.add('displayNoneBolado3');
    }
}

function hiddenQuizzToggle3(){
    document.getElementById("quizzBox323").style.display="none";
    let temp = document.querySelectorAll(".displayNoneBolado5");
    for(let i = 0; i<temp.length;i++){
        temp[i].classList.remove('displayNoneBolado5');
    }
}

function showQuizzToggle3(){
    document.getElementById("quizzBox323").style.display="flex";
    let temp = document.querySelectorAll(".displayNoneBolado6");
    for(let i = 0; i<temp.length;i++){
        temp[i].classList.add('displayNoneBolado5');
    }
}

function hiddenQuizzToggle4(){
    document.getElementById("quizzBox331").style.display="none";
    let temp = document.querySelectorAll(".displayNoneBolado7");
    for(let i = 0; i<temp.length;i++){
        temp[i].classList.remove('displayNoneBolado7');
    }
}

function showQuizzToggle4(){
    document.getElementById("quizzBox331").style.display="flex";
    let temp = document.querySelectorAll(".displayNoneBolado8");
    for(let i = 0; i<temp.length;i++){
        temp[i].classList.add('displayNoneBolado7');
    }
}

function hiddenQuizzToggle5(){
    document.getElementById("quizzBox332").style.display="none";
    let temp = document.querySelectorAll(".displayNoneBolado9");
    for(let i = 0; i<temp.length;i++){
        temp[i].classList.remove('displayNoneBolado9');
    }
}

function showQuizzToggle5(){
    document.getElementById("quizzBox332").style.display="flex";
    let temp = document.querySelectorAll(".displayNoneBolado10");
    for(let i = 0; i<temp.length;i++){
        temp[i].classList.add('displayNoneBolado9');
    }
}

function hiddenQuizzToggle6(){
    document.getElementById("quizzBox333").style.display="none";
    let temp = document.querySelectorAll(".displayNoneBolado11");
    for(let i = 0; i<temp.length;i++){
        temp[i].classList.remove('displayNoneBolado11');
    }
}

function showQuizzToggle6(){
    document.getElementById("quizzBox333").style.display="flex";
    let temp = document.querySelectorAll(".displayNoneBolado12");
    for(let i = 0; i<temp.length;i++){
        temp[i].classList.add('displayNoneBolado11');
    }
}
// FIM dos scripts Gabriel //