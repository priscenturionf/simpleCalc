let currentOp = '';
let previousOp = '';
let operacion = undefined;
let expresion = '';

function agregarNum(number) {
    currentOp += number;
    expresion += number;
    updateDisplay();
}

function elegirOp(op) {
    if (currentOp === '') return;
    if (previousOp !== '') {
        calcular();
    }
    operacion = op;
    previousOp = currentOp;
    currentOp = '';
    expresion += ' ' + op + ' ';
    updateDisplay();
}

function calcular() {
    let resultado;
    const prev = parseFloat(previousOp);
    const current = parseFloat(currentOp);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operacion) {
        case '+':
            resultado = prev + current;
            break;
        case '-':
            resultado = prev - current;
            break;
        case '*':
            resultado = prev * current;
            break;
        case '/':
            resultado = prev / current;
            break;
        default:
            return;
    }
    if (resultado == Infinity){
        resultado = 0;
    }

    currentOp = resultado.toString();
    operacion = undefined;
    previousOp = '';
    expresion = currentOp;
    updateDisplay();
}

function clearDisplay() {
    currentOp = '';
    previousOp = '';
    operacion = undefined;
    expresion = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('resultado').value = expresion;
}


const clickSound = document.getElementById('clickSound');
const introSound = document.getElementById('introSound');
const clearSound = document.getElementById('clearSound');

const introButton = document.querySelector('.intro');
const clearButton = document.querySelector('.clear');

introButton.addEventListener('click', () => {
    introSound.play();
});

clearButton.addEventListener('click', () => {
    clearSound.play();
});

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        clickSound.play();
    });
});