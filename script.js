let idQuizz;
let quizzChosen={};
let levels = {};
let numQuestions = 0;
let score=0;
let finalScore = Number((score/numQuestions)*100);
const page2 = document.querySelector(".page2");


/* Exibindo o resultado final */
function finalResult(){
    
    console.log("final");
    console.log(numQuestions);
    console.log(score);
    console.log(finalScore);
    /* for(let i=0; i<levels.length; i++){
        if(levels[i].minValue>finalScore){
            finalScore=levels[i].minValue;
        }
    } */

    page2.innerHTML += `
    <div class="resultBox">
        <div class="result">${finalScore} % de acerto: ${score}</div>
        <div class="messageFinal">
            <img src="${score}">
            <div class="textFinal">Parabéns Potterhead! Bem-vindx a Hogwarts, aproveite o loop infinito de comida e clique no botão abaixo para usar o vira-tempo e reiniciar este teste.</div>
        </div>
    </div>
    <button onclick="console.log("restart")" class="restartQuizz">Reiniciar Quizz</button>
    <button onclick="console.log("home")" class="goHome">Voltar pra home</button>
    `
    const next = document.querySelector(".resultBox");
    next.scrollIntoView();
}


/* Escolhendo a alternativa */
function optionChosen(selected){
    
    if(selected.classList.value === "option"){
        const options = selected.parentNode.querySelectorAll(".option");
        
        for (let i=0; i<options.length; i++){
            options[i].classList.add('notChosen');
            
            /* Mostrando o gabarito */
            if (options[i].id === "true"){
                options[i].classList.add('right');

            }
            else{
                options[i].classList.add('wrong');
            }
        }
        selected.classList.remove('notChosen')

        /* contabilizando os pontos */
        console.log(selected.id);
        if(selected.id === "true"){
            score+=1;
        }

        /* Para scrollar para o próximo box */
        selected.parentNode.classList.remove('void');
        const next = document.querySelector(".void");
        if(next === null){
            finalResult();
        }
        next.scrollIntoView();
    }
    
    
}


/* Abrindo o Quizz */
function starting(resposta){
    quizzChosen=resposta.data;
    /* para guardar o array de níveis de acerto */
    levels = quizzChosen.levels;
    /* Para lançar as questões do quizz */
    let questionsQuizz="";
    numQuestions = quizzChosen.questions.length;
    for(let i=0; i<numQuestions; i++){
        
        /* Para lançar as opções de cada questão do quizz */
        let options="";
        for (let j=0; j<quizzChosen.questions[i].answers.length; j++){

            options +=`<div onclick="optionChosen(this)" id="${quizzChosen.questions[i].answers[j].isCorrectAnswer}" class="option">
                    <img src=${quizzChosen.questions[i].answers[j].image}>
                    <div class="nameOption">${quizzChosen.questions[i].answers[j].text}</div>
                </div>
            `
        }

        questionsQuizz += `<div class="questionBox">
            <div style="background-color:${quizzChosen.questions[i].color};" class="questionTitle">${quizzChosen.questions[i].title}</div>
            <div class="options void"> 
            ${options}
            </div>
        </div>`
    }
    /* Alterando a imagem do Quizz */
    
    /* const page2 = document.querySelector(".page2"); */
    page2.innerHTML = `<div style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${quizzChosen.image});" class="quizzName">${quizzChosen.title}</div>
        ${questionsQuizz}
    `    
}

/* Função para o caso de erro */
function error(resposta){
    alert ("Tente novamente mais tarde!")
    console.log(resposta);
}

/* função para distribuir as questoes */
function getQuizz(){
    const promisse = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${idQuizz}`);
    promisse.then(starting);
    promisse.catch(error);
}

/* Para obter o ID do Quizz */
function screen2(){
    idQuizz  = prompt("Qual o Id do Quizz?");
    getQuizz();
}
