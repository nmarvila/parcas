let atual = 0;
let questaoAtual = 0;
let pontuacao = 0;

let perguntas = [{ text: '10 * 3', correct: 2 }, { text: '20 * 5', correct: 1 }, { text: '100 / 10', correct: 3 }, { text: '97 - 73', correct: 0 }, { text: '53 + 91', correct: 4 }];
let respostas = [['32', '35', '30', '33', '31'], ['120', '100', '110', '105', '130'], ['15', '20', '50', '10', '1'], ['24', '23', '20', '21', '25'], ['140', '147', '143', '145', '144']];

function comecarQuiz() {
    preencherQuiz(0);
}

function proxima() {
    if (atual == perguntas[questaoAtual].correct) {
        pontuacao++;
    }
    if (questaoAtual <= 2) {
        questaoAtual++;
        preencherQuiz(questaoAtual);
        limparSelecao();
    } else if (questaoAtual == 3) {
        document.querySelector(`#next`).innerHTML = `Finalizar`;
        document.querySelector(`#next`).setAttribute('onclick', 'finalizar()');
        questaoAtual++;
        preencherQuiz(questaoAtual);
        limparSelecao();
    }
}

function finalizar() {
    if (atual == perguntas[questaoAtual].correct) {
        pontuacao++;
    }
    $('#modal').modal('toggle');
    document.querySelector(`#start`).classList.toggle('hiddenBtn');
    let h1 = document.createElement(`h1`);
    h1.classList.add('text-white');
    h1.innerHTML = `Sua pontuação: ${pontuacao}`;
    document.querySelector(`.container`).appendChild(h1);
}

function selecionar(alternativa) {
    atual = alternativa;

    limparSelecao();

    document.querySelector(`#question${alternativa + 1}`).classList.toggle('btn-outline-success');
    document.querySelector(`#question${alternativa + 1}`).classList.toggle('btn-success');
}

function preencherQuiz(questao) {
    document.querySelector(`#quiz p`).innerHTML = perguntas[questao].text;
    respostas[questao].forEach((element, index) => {
        document.querySelector(`#question${index + 1}`).innerHTML = element;
    });
}

function limparSelecao() {
    document.querySelector(`#question1`).classList.remove('btn-success');
    document.querySelector(`#question2`).classList.remove('btn-success');
    document.querySelector(`#question3`).classList.remove('btn-success');
    document.querySelector(`#question4`).classList.remove('btn-success');
    document.querySelector(`#question5`).classList.remove('btn-success');
    document.querySelector(`#question1`).classList.add('btn-outline-success');
    document.querySelector(`#question2`).classList.add('btn-outline-success');
    document.querySelector(`#question3`).classList.add('btn-outline-success');
    document.querySelector(`#question4`).classList.add('btn-outline-success');
    document.querySelector(`#question5`).classList.add('btn-outline-success');
}