let display = document.getElementById('display');

function appendNumber(number) {
    if (display.value === '0') {
        display.value = number;
    } else {
        display.value += number;
    }
}

function appendOperator(operator) {
    const lastChar = display.value.slice(-1);
    const operators = ['+', '-', '*', '/'];

    // Impede colocar operador se o visor estiver vazio ou for apenas um sinal de menos
    if (display.value === '0' || display.value === '-') return;

    // Se o último caractere já for um operador, ele substitui pelo novo
    if (operators.includes(lastChar)) {
        display.value = display.value.slice(0, -1) + operator;
    } else {
        display.value += operator;
    }
}

function toggleNegative() {
    if (display.value === '0') {
        display.value = '-';
    } else if (display.value === '-') {
        display.value = '0';
    } else if (display.value.startsWith('-')) {
        display.value = display.value.substring(1);
    } else {
        display.value = '-' + display.value;
    }
}

function clearDisplay() {
    display.value = '0';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
    if (display.value === '') display.value = '0';
}

function calculate() {
    try {
        // eval() resolve a string matemática. 
        // Usamos Function() como uma alternativa mais segura ao eval direto.
        display.value = new Function('return ' + display.value)();
    } catch (e) {
        display.value = "Erro";
        setTimeout(clearDisplay, 1500);
    }
}