//começo js página 1//
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