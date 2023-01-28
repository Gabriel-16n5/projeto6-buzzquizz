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

    if(createQuizzPage31.levels[2].text != 'Descrição do nível'){
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

function page31to32(){
    if(createQuizzPage31.title != ''&&createQuizzPage31.image != ''&&minQuestionsQuizzNumber >2&&minLevelsQuizzNumber >1&&minLevelsQuizzNumber != ''&&minQuestionsQuizzNumber != ''){
    let changeClass1 = document.querySelector('.page3-1');
    let changeClass2 = document.querySelector('.page3-2Full');
    changeClass1.classList.add('displayNone');
    changeClass2.classList.remove('displayNone');
    }
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

function searchQuizz(){ //essa função procura os quizzes, via um id aleatório que foi obtido no while
    let k = 0;          //após isso ela aciona outras funções que tratam o erro ou mostra alguns dados do quizz na tela 1
    let links = [];
    let aux = [];
    let text = 'https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/';
    while(k < 6){
        let r1 = Math.floor(Math.random() * 100);
        console.log(r1);
        text += `${r1}`
        links.push(text)
        text = 'https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/';
        k += 1;
    }
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
        <img src="${array.image}" alt="">
        <div class="text" id="t${help}">${array.title}</div>
        `;
    }
    help += 1;
}
searchQuizz();