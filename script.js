// Começo dos scripts Gabriel //
let createQuizzPage31 = {
    title: '',
    image: '',
    questions: [
		{
			title: "",
			color: "",
			answers: [
				{
					text: "",
					image: "",
					isCorrectAnswer: true
				},
				{
					text: "",
					image: "",
					isCorrectAnswer: false
				},
				{
					text: "",
					image: "",
					isCorrectAnswer: false
				},
				{
					text: "",
					image: "",
					isCorrectAnswer: false
				}
			]
		},
		{
			title: "",
			color: "",
			answers: [
				{
					text: "",
					image: "",
					isCorrectAnswer: true
				},
				{
					text: "",
					image: "",
					isCorrectAnswer: false
				},
				{
					text: "",
					image: "",
					isCorrectAnswer: false
				},
				{
					text: "",
					image: "",
					isCorrectAnswer: false
				}
			]
		},
		{
			title: "",
			color: "",
			answers: [
				{
					text: "",
					image: "",
					isCorrectAnswer: true
				},
				{
					text: "",
					image: "",
					isCorrectAnswer: false
				},
				{
					text: "",
					image: "",
					isCorrectAnswer: false
				},
				{
					text: "",
					image: "",
					isCorrectAnswer: false
				}
			]
		}
	],
	levels: [
		{
			title: "",
			image: "",
			text: "",
			minValue: 0
		},
		{
			title: "",
			image: "",
			text: "",
			minValue: 50
		},
		{
			title: "",
			image: "",
			text: "",
			minValue: 100
		}
	]
}
let minQuestionsQuizzNumber;
let minLevelsQuizzNumber;


function objectDataQuizz(){
    createQuizzPage31.title = document.getElementById('quizzTitle').value;
    createQuizzPage31.image = document.getElementById('quizzUrlImage').value;
    minQuestionsQuizzNumber = document.getElementById('qtdQuestions').value;
    minLevelsQuizzNumber = document.getElementById('qtdLevels').value;
    //Question1
    createQuizzPage31.questions[0].title = document.getElementById('q1AnswerText').value;
    createQuizzPage31.questions[0].color = document.getElementById('bgColorAnswer').value;
    //correct
    createQuizzPage31.questions[0].answers[0].text = document.getElementById('q1CorrectAnswer').value;
    createQuizzPage31.questions[0].answers[0].image = document.getElementById('q1CorrectAnswerUrl').value;
    //Incorrect
    createQuizzPage31.questions[0].answers[1].text = document.getElementById('q1IncorrectAnswer1').value;
    createQuizzPage31.questions[0].answers[1].image = document.getElementById('q1IncorrectAnswerUrl1').value;
    createQuizzPage31.questions[0].answers[2].text = document.getElementById('q1IncorrectAnswer2').value;
    createQuizzPage31.questions[0].answers[2].image = document.getElementById('q1IncorrectAnswerUrl2').value;
    createQuizzPage31.questions[0].answers[3].text = document.getElementById('q1IncorrectAnswer3').value;
    createQuizzPage31.questions[0].answers[3].image = document.getElementById('q1IncorrectAnswerUrl3').value;
    //Question2
    createQuizzPage31.questions[1].title = document.getElementById('q2AnswerText').value;
    createQuizzPage31.questions[1].color = document.getElementById('bgColorAnswer').value;
    //correct
    createQuizzPage31.questions[1].answers[0].text = document.getElementById('q2CorrectAnswer').value;
    createQuizzPage31.questions[1].answers[0].image = document.getElementById('q2CorrectAnswerUrl').value;
    //Incorrect
    createQuizzPage31.questions[1].answers[1].text = document.getElementById('q2IncorrectAnswer1').value;
    createQuizzPage31.questions[1].answers[1].image = document.getElementById('q2IncorrectAnswerUrl1').value;
    createQuizzPage31.questions[1].answers[2].text = document.getElementById('q2IncorrectAnswer2').value;
    createQuizzPage31.questions[1].answers[2].image = document.getElementById('q2IncorrectAnswerUrl2').value;
    createQuizzPage31.questions[1].answers[3].text = document.getElementById('q2IncorrectAnswer3').value;
    createQuizzPage31.questions[1].answers[3].image = document.getElementById('q2IncorrectAnswerUrl3').value;
    //Question3
    createQuizzPage31.questions[2].title = document.getElementById('q3AnswerText').value;
    createQuizzPage31.questions[2].color = document.getElementById('bgColorAnswer').value;
    //correct
    createQuizzPage31.questions[2].answers[0].text = document.getElementById('q3CorrectAnswer').value;
    createQuizzPage31.questions[2].answers[0].image = document.getElementById('q3CorrectAnswerUrl').value;
    //Incorrect
    createQuizzPage31.questions[2].answers[1].text = document.getElementById('q3IncorrectAnswer1').value;
    createQuizzPage31.questions[2].answers[1].image = document.getElementById('q3IncorrectAnswerUrl1').value;
    createQuizzPage31.questions[2].answers[2].text = document.getElementById('q3IncorrectAnswer2').value;
    createQuizzPage31.questions[2].answers[2].image = document.getElementById('q3IncorrectAnswerUrl2').value;
    createQuizzPage31.questions[2].answers[3].text = document.getElementById('q3IncorrectAnswer3').value;
    createQuizzPage31.questions[2].answers[3].image = document.getElementById('q3IncorrectAnswerUrl3').value;
    //Level1
    createQuizzPage31.levels[0].title = document.getElementById('l1title').value;
    createQuizzPage31.levels[0].image = document.getElementById('l1UrlImage').value;
    createQuizzPage31.levels[0].text = document.getElementById('l1Descrition').value;
    createQuizzPage31.levels[0].minValue = document.getElementById('l1%min').value;
    //Level2
    createQuizzPage31.levels[1].title = document.getElementById('l2title').value;
    createQuizzPage31.levels[1].image = document.getElementById('l2UrlImage').value;
    createQuizzPage31.levels[1].text = document.getElementById('l2Descrition').value;
    createQuizzPage31.levels[1].minValue = document.getElementById('l2%min').value;
    //Level3
    createQuizzPage31.levels[2].title = document.getElementById('l3title').value;
    createQuizzPage31.levels[2].image = document.getElementById('l3UrlImage').value;
    createQuizzPage31.levels[2].text = document.getElementById('l3Descrition').value;
    createQuizzPage31.levels[2].minValue = document.getElementById('l3%min').value;

    if(createQuizzPage31.levels[2].text != ''){
        changeImgEndQuizz = document.getElementById('endQuizz');
        changeImgEndQuizz.setAttribute("src", createQuizzPage31.image);
        changeTextEndQuizz = document.getElementById('endQuizzText');
        changeTextEndQuizz.innerHTML = createQuizzPage31.title;
        sendQuizz();
    }
}

function sendQuizz(){
    const promisse = axios.post('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes', createQuizzPage31);
    promisse.then(processAnswer);
}

function processAnswer(answer){
    console.log(answer);
}

function validationPage31(){
    if(createQuizzPage31.title != ''&&createQuizzPage31.image != ''&&minQuestionsQuizzNumber >2
    &&minLevelsQuizzNumber >1&&minLevelsQuizzNumber != ''&&minQuestionsQuizzNumber != ''){
        page31to32('correct');
    } else{
        page31to32('incorrect');
    }
}

function page31to32(x){
    if(x == "correct"){
        let changeClass1 = document.querySelector('.page3-1');
        let changeClass2 = document.querySelector('.page3-2Full');
        changeClass1.classList.add('displayNone');
        changeClass2.classList.remove('displayNone');
    } else{
        alert('Validação falhou, preencha novamente(se aparecer essa mensagem e estiver certo, tente novamente*BUG*)');
    }
}

function validationPage32(){
    if(createQuizzPage31.questions[0].title != ''&&createQuizzPage31.questions[0].color[0] == '#'
    &&createQuizzPage31.questions[0].answers[0].text != ''&&createQuizzPage31.questions[0].answers[0].image != ''
    &&createQuizzPage31.questions[0].answers[1].text != ''&&createQuizzPage31.questions[0].answers[1].image !== ''
    &&createQuizzPage31.questions[0].answers[2].text != ''&&createQuizzPage31.questions[0].answers[2].image !== ''
    &&createQuizzPage31.questions[0].answers[3].text != ''&&createQuizzPage31.questions[0].answers[3].image !== ''
    //
    &&createQuizzPage31.questions[1].title != ''&&createQuizzPage31.questions[1].color[0] == '#'
    &&createQuizzPage31.questions[1].answers[0].text != ''&&createQuizzPage31.questions[1].answers[0].image != ''
    &&createQuizzPage31.questions[1].answers[1].text != ''&&createQuizzPage31.questions[1].answers[1].image !== ''
    &&createQuizzPage31.questions[1].answers[2].text != ''&&createQuizzPage31.questions[1].answers[2].image !== ''
    &&createQuizzPage31.questions[1].answers[3].text != ''&&createQuizzPage31.questions[1].answers[3].image !== ''
    //
    &&createQuizzPage31.questions[2].title != ''&&createQuizzPage31.questions[2].color[0] == '#'
    &&createQuizzPage31.questions[2].answers[0].text != ''&&createQuizzPage31.questions[2].answers[0].image != ''
    &&createQuizzPage31.questions[2].answers[1].text != ''&&createQuizzPage31.questions[2].answers[1].image !== ''
    &&createQuizzPage31.questions[2].answers[2].text != ''&&createQuizzPage31.questions[2].answers[2].image !== ''
    &&createQuizzPage31.questions[2].answers[3].text != ''&&createQuizzPage31.questions[2].answers[3].image !== ''
    ){
        page32to33('correct');
    } else{
        page32to33('incorrect');
    }
}

function page32to33(x){
    if(x == 'correct'){
        let changeClass1 = document.querySelector('.page3-2Full');
        let changeClass2 = document.querySelector('.page3-3Full');
        changeClass1.classList.add('displayNone');
        changeClass2.classList.remove('displayNone');
    } else{
        alert('Validação falhou, preencha novamente(se aparecer essa mensagem e estiver certo, tente novamente*BUG*)');
    }
}

function validationPage33(){
    if(createQuizzPage31.levels[0].title != ''&&createQuizzPage31.levels[0].image != ''&&createQuizzPage31.levels[0].text != ''&&createQuizzPage31.levels[0].minValue < 101
    &&createQuizzPage31.levels[1].title != ''&&createQuizzPage31.levels[1].image != ''&&createQuizzPage31.levels[1].text != ''&&createQuizzPage31.levels[1].minValue < 101
    &&createQuizzPage31.levels[2].title != ''&&createQuizzPage31.levels[2].image != ''&&createQuizzPage31.levels[2].text != ''&&createQuizzPage31.levels[2].minValue < 101
    ){
        page33to34('correct');
    } else{
        page33to34('incorrect');
    }
}

function page33to34(x){
    if(x == 'correct'){
        let changeClass1 = document.querySelector('.page3-3Full');
        let changeClass2 = document.querySelector('.page3-4Full');
        changeClass1.classList.add('displayNone');
        changeClass2.classList.remove('displayNone');
    } else{
        alert('Validação falhou, preencha novamente(se aparecer essa mensagem e estiver certo, tente novamente*BUG*)');
    }

}

function page34to21(){
    let changeClass1 = document.querySelector('.page3-4Full');
    let changeClass2 = document.querySelector('.page2');
    changeClass1.classList.add('displayNone');
    changeClass2.classList.remove('displayNone');
}

function page34to11(){
    let changeClass1 = document.querySelector('.page3-4Full');
    let changeClass2 = document.querySelector('.page1-1');
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

function fillQuizzBasicInfo(box){
    console.log(box)
}

function fillQuizzQuestion1(box){
    console.log(box)
}

function fillQuizzQuestion2(box){
    console.log(box)
}

function fillQuizzQuestion3(box){
    console.log(box)
}

function fillQuizzLevel1(box){
    console.log(box)
}

function fillQuizzLevel2(box){
    console.log(box)
}

function fillQuizzLevel3(box){
    console.log(box)
}
// FIM dos scripts Gabriel //
//começo js página 1 Arthur//
const contentScreenOne = document.querySelectorAll('.quizzes');
let help = 1;  //váriavel que auxilia a seleção de id das imagens
let validQuizz = ['2', '1', '989'];

function searchQuizz(){ //essa função procura os quizzes, via um id aleatório que foi obtido no while
    let k = 1;          //após isso ela aciona outras funções que tratam o erro ou mostra alguns dados do quizz na tela 1
    let links = [];
    let aux = [];
    let text = 'https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/';
    while(k < 6){
        let r1 = Math.floor(Math.random() * 1500 + 1);
        console.log(r1);
        text += `${r1}`
        links.push(text)
        text = 'https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/';
        k += 1;
    }
    links.push('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/18882');
    k = 0;
    while(k < 6){
        aux.push(axios.get(links[k]));
        k += 1;
    }
    k = 0;
    while(k < 6){
        aux[k].then(process);
        aux[k].catch(errorProcess);
        k += 1;
    }
}

function errorProcess(error){   // trata qualquer tipo de erro que possa acontecer na troca de informações da api e mostra no console.log
    console.log(error);
}

function process(api){          //adiciona elementos da api no html, esses elementos são: imagem e título do quizz
    const array = api.data;
    for(let i = 0; i < 2; i ++){
        contentScreenOne[i].innerHTML += `
        <img onclick="page1${i + 1}to2(${array.id})" src="${array.image}" alt="">
        <div class="text" id="t${help}">${array.title}</div>
        `;
    }
    help += 1;
}

function page11to31(){
    let changeClass1 = document.querySelector('.page1-1');
    let changeClass2 = document.querySelector('.page3-1');
    changeClass1.classList.add('displayNone');
    changeClass2.classList.remove('displayNone');
}

function page12to31(){
    let changeClass1 = document.querySelector('.page1-2');
    let changeClass2 = document.querySelector('.page3-1');
    changeClass1.classList.add('displayNone');
    changeClass2.classList.remove('displayNone');
}

function page11to2(id){
    let changeClass1 = document.querySelector('.page1-1');          //utiliza o id para dizer para a página 2 qual quiz vai ser utilizado
    let changeClass2 = document.querySelector('.page2');
    changeClass1.classList.add('displayNone');
    changeClass2.classList.remove('displayNone');
}

function page12to2(id){
    let changeClass1 = document.querySelector('.page1-2');          //utiliza o id para dizer para a página 2 qual quiz vai ser utilizado
    let changeClass2 = document.querySelector('.page2');
    changeClass1.classList.add('displayNone');
    changeClass2.classList.remove('displayNone');
}

function verifyUserQuizz(){
let idQuizz;
let quizzChosen={};
let ans={};
let levels = {};
let numQuestions = 0;
let score=0;
let minLevel=0;
let finalImage="";
let finalText="";
let finalTitle="";
let finalScore=0;
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
    minLevel=0;
    finalImage="";
    finalText="";
    finalTitle="";
    
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
    finalScore = Number(((score / numQuestions) * 100).toFixed(0)); 

    /* Descobrindo o nível mínimo */

    for(let i=0; i<levels.length; i++){

        /* Para enquadrar a pontuação ao nível correto */
        if(levels[i].minValue>=minLevel && levels[i].minValue <= finalScore){
            minlevel = levels[i].minValue;
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
/* Função para embaralhar as respostas */
function comparador() { 
    return Math.random() - 0.5; 
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
        let ans = quizzChosen.questions[i].answers;
        console.log(ans);

        //para embaralhar as respostas
        const newAns = ans.sort(comparador); 

        console.log(newAns);
        let options="";
        for (let j=0; j<ans.length; j++){

            options +=`<div onclick="optionChosen(this)" id="${newAns[j].isCorrectAnswer}" class="option">
                    <img src=${newAns[j].image}>
                    <div class="nameOption">${newAns[j].text}</div>
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
    

}

searchQuizz();