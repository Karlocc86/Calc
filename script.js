let fullOp = "";

function handleClick(number) {
    if (number === 'c') {
        fullOp = "";
        showNumber("");
        return;
    }

    if (number === '=') {
        calculate();
        return;
    }

    
    if (number === '-' && fullOp === "") {
        fullOp = "-";
        showNumber(fullOp);
        return;
    }

   
    let operadores = ['+', '-', 'x', '/', '^'];
    let ultimoCaracter = fullOp.slice(-1);
    
    if (operadores.includes(number) && operadores.includes(ultimoCaracter)) {
        return; 
    }

    fullOp = fullOp + number;
    showNumber(fullOp);
}

function calculate() {
    console.log({ fullOp });

    const match = fullOp.match(/^(-?\d+\.?\d*)([+\-x\/^])(-?\d+\.?\d*)$/);

    //Ayuda de IA para regex,  match y para el log
    if (!match) return; 

    const a = match[1];
    const op = match[2];
    const b = match[3];

    console.log({ a, op, b });

    let res;

    switch (op) {
        case '+':
            res = Number(a) + Number(b);
            break;
        case '-':
            res = Number(a) - Number(b);
            break;
        case 'x':
            res = Number(a) * Number(b);
            break;
        case '/':
            if(Number(b) === 0) {
                alert("No se puede dividir por cero");
                return;
            }


            res = Number(a) / Number(b);
            break;
        case '^':
            res = Math.pow(Number(a), Number(b)); 
            break;
        default:
            break;
    }

    const historialDiv = document.getElementById('historial');
    if (historialDiv) {
        historialDiv.innerHTML = `<p>${fullOp} = ${res}</p>` + historialDiv.innerHTML;
    }

    showNumber(res);
    
    fullOp = res.toString(); 
}

function showNumber(n) {
    document.getElementById('screen').innerHTML = n;
}