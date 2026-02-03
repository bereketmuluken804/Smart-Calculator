function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function swichSign(a){
    return -(a);
}

function percentage(a){
    return a/100;
}

let first, op, second;

function operate(first, op, second=null){
    switch(op){
        case "+": return add(first, second);
        case "-": return subtract(first, second);
        case "*":
        case "x": 
        case "X": return multiply(first, second);
        case "/": return divide(first, second);
        case "%": return percentage(first);
        case "s": return swichSign(first); 
    }
}

const keys = ["AC", "C", "%", 7,8,9,4,5,6,1,2,3,"+/-",0,"."]
numPad = document.querySelector(".nums");
for (let i of keys){
    btn = document.createElement("button");
    btn.textContent = i;
    numPad.appendChild(btn);
}

const ops = ["÷", "×", "-", "+", "="];
opPad = document.querySelector(".ops")
for(let k of ops){
    btn = document.createElement("button");
    btn.textContent = k;
    opPad.appendChild(btn);
    
}