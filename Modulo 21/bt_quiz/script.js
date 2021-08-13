let atual = 0;
let pontuacao = 0;

function comecarQuiz() {
    let perguntas = [{ text: '10 * 3', correct: 2 }, { text: '20 * 5', correct: 1 }, { text: '100 / 10', correct: 3 }, { text: '97 - 73', correct: 0 }, { text: '53 + 91', correct: 4 }];
    let respostas = [['32', '35', '30', '33', '31'], ['120', '100', '110', '105', '130'], ['15', '20', '50', '10', '1'], ['24', '23', '20', '21', '25'], ['140', '147', '143', '145', '144']];

    document.querySelector('.modal-body').appendChild(document.querySelector('#modelo').cloneNode(true));
    document.querySelector('.modal-body #modelo').setAttribute('id', 'quiz');

    document.querySelector(`#quiz p`).innerHTML = perguntas[0].text;
    respostas[0].forEach((element, index) => {
        document.querySelector(`#label${index + 1}`).innerHTML = element;
        document.querySelector(`#question${index + 1}`).setAttribute('value', 0);
    });
    document.querySelector(`#question${perguntas[0].correct + 1}`).setAttribute('value', 1);
}

function proxima() {
    document.querySelector('.modal-body').removeChild(document.querySelector('.modal-body #quiz'));
    document.querySelector('.modal-body').appendChild(document.querySelector('#modelo').cloneNode(true));
    document.querySelector('.modal-body #modelo').setAttribute('id', 'quiz');
}