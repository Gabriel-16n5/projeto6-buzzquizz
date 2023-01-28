let idQuizz;
let quizzChosen={};
let levels = {};
let numQuestions = 0;
let score=0;
let minLevel=0;
const page2 = document.querySelector(".page2");

/* Para voltar a tela 1 */
function gohome(){
    alert("Tela 1");
}

/* para reiniciar Quizz */
function restartQuizz(){
    /* as respostas zeradas pro estado inicial */
    quizzChosen={};
    levels = {};
    numQuestions = 0;
    score=0;
    minLevel=0;
    
    getQuizz();
    /* a tela deverá ser scrollada novamente para o topo,  */
    function scroll(){
        const start = document.querySelector(".page2");
        start.scrollIntoView({block: "start"});
    }
    setTimeout(scroll, 500);
}

/* Exibindo o resultado final */
function finalResult(){
    const finalScore = ((score / numQuestions) * 100).toFixed(0); 

    /* Descobrindo o nível mínimo */

    for(let i=0; i<levels.length; i++){
        
        if(finalScore>levels[i].minValue && levels[i].minValue>minLevel){
            minLevel=levels[i].minValue;
            finalImage=levels[i].image;
            finalText=levels[i].text;
            finalTitle=levels[i].title;
        }
    } 

    page2.innerHTML += `
    <div class="resultBox hidden">
        <div class="result">${finalScore}% de acerto: ${finalTitle}</div>
        <div class="messageFinal">
            <img src="${finalImage}">
            <div class="textFinal">${finalText}</div>
        </div>
    </div>
    <button onclick="restartQuizz()" class="restartQuizz hidden">Reiniciar Quizz</button>
    <button onclick="gohome()" class="goHome hidden">Voltar pra home</button>
    `
    /* scrollar a página após 2 segundos */
    const next = document.querySelector(".resultBox");
    
    /* scrollar a página após 2 segundos */
    /* função setTimeout */
    function scroll(){
        next.classList.remove('hidden');
        document.querySelector(".restartQuizz").classList.remove('hidden');
        document.querySelector(".goHome").classList.remove('hidden');
        next.scrollIntoView({behavior:"smooth"}); 
        
    }
    setTimeout(scroll, 2000);
    
}


/* Escolhendo a alternativa */
function optionChosen(selected){
    /* para impedir a mudança de resposta */
    if(selected.classList.value === "option"){
        const options = selected.parentNode.querySelectorAll(".option");
        /* para mostrar gaarito ao clicar */
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
        selected.parentNode.parentNode.classList.remove('void');
        const next = document.querySelector(".void");
        if(next === null){
            finalResult();
        }
        /* scrollar a página após 2 segundos */
        /* função setTimeout */
        else{
            function scroll(){
                next.scrollIntoView({behavior:"smooth"}); 
            }
            setTimeout(scroll, 2000);
        }
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

        questionsQuizz += `<div class="questionBox void">
            <div style="background-color:${quizzChosen.questions[i].color};" class="questionTitle">${quizzChosen.questions[i].title}</div>
            <div class="options"> 
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
