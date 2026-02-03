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

const keys = ["AC", "C", "%","÷" ,7,8,9,"×",4,5,6,"-",1,2,3, "+","+/-",0,".","="]
numPad = document.querySelector(".nums");
for (let i of keys){
    
    btn = document.createElement("button");
    if ((!Number.isInteger(i))){btn.style.backgroundColor = "#0ed367"; btn.classList.add("op");}
    if(i === "="){btn.style.backgroundColor = "#0b95ff";}
    btn.textContent = i;
    numPad.appendChild(btn);
}
const nums = document.querySelectorAll("button")
nums.forEach(k=>{
    k.addEventListener("mouseenter", e=>{
        e.target.style.backgroundColor = "#05ac7d";
    })
     k.addEventListener("mouseleave", e=>{
        e.target.style.backgroundColor = "#4d6c62";
    })
})


const opKeys = document.querySelectorAll(".op")
opKeys.forEach((k)=>{
    k.addEventListener("mouseenter", e =>{
        e.target.style.backgroundColor = "#357551";
        if(e.target.textContent === "Dark" || e.target.textContent === "Light"){e.target.style.backgroundColor="#07378f"}
    })
    k.addEventListener("mouseleave", e =>{
        e.target.style.backgroundColor = "#0ed367";
        if (e.target.textContent === "="){e.target.style.backgroundColor="#0b95ff"}

    })
})

const theme_btn = document.querySelectorAll(".theme_btn")
theme_btn.forEach((k)=>{
    k.addEventListener("mouseenter", e =>{
        e.target.style.backgroundColor="#07378f";
    })
    k.addEventListener("mouseleave", e =>{
        e.target.style.backgroundColor = "#1485fe";
    })
})
const body = document.querySelector("body")
const calc = document.querySelector(".calculator")
const display = document.querySelector(".display")
const light_btn = document.querySelector("#light")
const dark_btn = document.querySelector("#dark")

light_btn.addEventListener("click", e => {
    body.style.backgroundColor = "#ffffff";
    body.style.color = "#000000";
    calc.style.backgroundColor ="#150578";
    calc.style.boxShadow = "0 0 20px #1b0d71"
    display.style.backgroundColor ="#26a4da";
    
})
dark_btn.addEventListener("click", e => {
    body.style.backgroundColor = "";
    body.style.color = "";
    calc.style.backgroundColor =""
    display.style.backgroundColor ="";
    calc.style.boxShadow = "";
    
})