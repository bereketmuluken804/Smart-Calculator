function add(a, b){
    return Math.round((a + b)*10000000000)/10000000000;
}

function subtract(a, b){
    return Math.round((a - b) * 10000000000) / 10000000000;
}

function multiply(a, b){
    return Math.round((a * b) * 10000000000) / 10000000000;
}

function divide(a, b){
    if (b === 0) return "Can't divide by zero";
    return Math.round((a / b) * 10000000000) / 10000000000;

}

function swichSign(a){
    return -(a);
}

function percentage(a, b){
    return Math.round((a/100 * b) * 10000000000) / 10000000000;
}

let first, op, second;

function operate(first, op, second){
    first = Number(first);
    if(second !== null){
        second = Number(second);
    }
   
    switch(op){
        case "+": return add(first, second);
        case "-": return subtract(first, second);
        case "×": return multiply(first, second);
        case "÷": return divide(first, second);
        case "%": return percentage(first, second);
        case "s": return swichSign(first); 
    }
}

const keys = ["AC", "C", "%","÷" ,7,8,9,"×",4,5,6,"-",1,2,3, "+","+/-",0,".","="]
numPad = document.querySelector(".nums");
for (let i of keys){
    btn = document.createElement("button");
    if ((!Number.isInteger(i))){
        btn.style.backgroundColor = "#0ed367"; 
        btn.classList.add("op");
        if (["÷", "×", "-", "+", "%"].includes(i)){btn.classList.add("basic_ops")}
        if(i === "+/-"){btn.classList.add("signChange")}
    }
    
    if (i === "=") {
        btn.style.backgroundColor = "#0b95ff";
        btn.classList.add("equal");
    }
    if (i === "."){
        btn.classList.add("dot");
    }

    if (Number.isInteger(i)){
        btn.classList.add("num_key");
    }
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
const svg = document.querySelector("svg")

light_btn.addEventListener("click", e => {
    body.style.backgroundColor = "#ffffff";
    body.style.color = "#000000";
    calc.style.backgroundColor ="#b9e2fa";
    calc.style.boxShadow = "0 0 20px #1b0d71"
    display.style.backgroundColor ="#baffc6";
    svg.style.fill = "black";
    
})
dark_btn.addEventListener("click", e => {
    body.style.backgroundColor = "";
    body.style.color = "";
    calc.style.backgroundColor =""
    display.style.backgroundColor ="";
    calc.style.boxShadow = "";
    svg.style.fill = "white";
    
})
const operation = document.querySelector("#operations")
const result = document.querySelector("#result")
numPad = document.querySelector(".nums");
numPad.addEventListener("click", e=>{
    if(e.target.textContent ==="AC"){ 
    operation.textContent = "0";
    result.textContent = "";}
    else if(e.target.textContent === "C"){
    operation.textContent = operation.textContent.slice(0, -1);
    if(operation.textContent.length === 0){operation.textContent = "0"}
}
})

let equal_clicked = false;
const num_keys = document.querySelectorAll(".num_key");
num_keys.forEach(key=>{
    key.addEventListener("click", e=>{
        if(operation.textContent.length > 15){return}
        if(equal_clicked){
            operation.textContent = "";
            result.textContent = "";
        }
        if(operation.textContent === "0"){
            operation.textContent = e.target.textContent;
        }
        else if(operation.textContent.at(-1) === "0"){
            if(operation.textContent.at(-2) !== "." && Number.isNaN(Number(operation.textContent.at(-2)))){
                operation.textContent = operation.textContent.slice(0, -1) + e.target.textContent;
            }
            else{
                operation.textContent += e.target.textContent
            }
        }
        else {operation.textContent += e.target.textContent;}
        equal_clicked = false;
    });
});

function equalOperation(){
    if(!(Number.isInteger(Number(operation.textContent)))){
        if(operation.textContent.at(-1) === "%"){
                operation.textContent = Number(operation.textContent.slice(0, -1)) / 100;
                return;
            }
        if(!(["÷", "×", "-", "+", "%"].includes(operation.textContent.at(-1)))){
        let cleanText = operation.textContent.replace(/\s+/g, ""); // remove all spaces
        let min = "";
        if(cleanText.at(0)==="-"){
            min = "-";
            cleanText = cleanText.slice(1);
        }
        parts = cleanText.split(/([+\-×÷%])/);
        parts[0] = min+parts[0];
        let r = operate(parts[0], parts[1], parts[2]);
        if(r === "Can't divide by zero"){
                    alert(r)
                    return;
                }
        operation.textContent = r;
        result.textContent = "";
        equal_clicked = true;
    }
}
}

function nextOperation(e){
    if(operation.textContent.replace(/\s+/g, "").length < 16){
        if(!(Number.isNaN(Number(operation.textContent)))){
            operation.textContent += e.target.textContent;
        }
        else{    
            if(["÷", "×", "-", "+", "%"].includes(operation.textContent.at(-1))){
                if(operation.textContent.at(-1) === "%"){
                    operation.textContent = Number(operation.textContent.slice(0, -1)) / 100;
                    return;
                }
                operation.textContent = operation.textContent.slice(0, -1) + e.target.textContent;
            } 
            else{
                let cleanText = operation.textContent.replace(/\s+/g, "");// remove all spaces
                let min = "";
                if(cleanText.at(0)==="-"){
                    min = "-";
                    cleanText = cleanText.slice(1);
                }
                parts = cleanText.split(/([+\-×÷%])/);
                parts[0] = min+parts[0];
                let r = operate(parts[0], parts[1], parts[2]);
                if(r === "Can't divide by zero"){
                    alert(r)
                    return;
                }
                operation.textContent = r + e.target.textContent;
                result.textContent = r;
            }
        }
        equal_clicked = false;
    }

}
const basic_ops = document.querySelectorAll(".basic_ops");
basic_ops.forEach(ops=>{
    ops.addEventListener("click", nextOperation);})

const equal = document.querySelector(".equal");
equal.addEventListener("click",equalOperation)

document.addEventListener("keydown", e=>{
    e.preventDefault();
    if(["0","1","2","3","4","5","6","7","8","9"].includes(e.key)){
        if(operation.textContent.length > 15){return}
        if(equal_clicked){
            operation.textContent = "";
            result.textContent = "";
        }
        if(operation.textContent === "0"){
            operation.textContent = e.key;
        }
        else if(operation.textContent.at(-1) === "0"){
            if(operation.textContent.at(-2) !== "." && Number.isNaN(Number(operation.textContent.at(-2)))){
                operation.textContent = operation.textContent.slice(0, -1) + e.key;
            }
            else{
                operation.textContent += e.key
            }
        }
        else {operation.textContent += e.key;}
    }
    else if(e.key==="Enter"){
        equalOperation();
        return;
    }
    else if(e.key === "="){
        equalOperation();
        return;
    }

    else if(e.key ==="a" || e.key === "A" || (e.key === "Backspace" && e.ctrlKey) ){
        operation.textContent = "0";
        result.textContent = "";
    }
    else if(e.key === "Backspace"){
            operation.textContent = operation.textContent.slice(0, -1);
        if(operation.textContent.length === 0){operation.textContent = "0"}
    }

    else if(["/", "*", "-", "+", "%"].includes(e.key)){
        if(operation.textContent.replace(/\s+/g, "").length < 16){
                if(!(Number.isNaN(Number(operation.textContent)))){
                    if(e.key === "*"){operation.textContent += "×";}
                    else if(e.key === "/"){operation.textContent += "÷"}
                    else{operation.textContent += e.key;}
                }
                else{    
                    if(["÷", "×", "-", "+", "%"].includes(operation.textContent.at(-1))){
                        operation.textContent = operation.textContent.slice(0, -1) + e.key;
                    } 
                    else{
                        let cleanText = operation.textContent.replace(/\s+/g, "");// remove all spaces
                        let min = "";
                        if(cleanText.at(0)==="-"){
                            min = "-";
                            cleanText = cleanText.slice(1);
                        }
                        parts = cleanText.split(/([+\-×÷])/);
                        parts[0] = min+parts[0];
                        let r = operate(parts[0], parts[1], parts[2]);
                        operation.textContent = r + e.key;
                        result.textContent = r;
                    }
        }
    }
    }
    else if(e.key === "."){
        if(!Number.isNaN(Number(operation.textContent + "."))){
        operation.textContent += ".";
    }
    else if(Number.isNaN(Number(operation.textContent))){
        if(Number.isInteger(Number(operation.textContent.at(-1)))){
            let cleanText = operation.textContent.replace(/\s+/g, "");// remove all spaces
            parts = cleanText.split(/([+\-×÷])/);
            if(!Number.isNaN(Number(parts[2] + "."))){
                parts[2] += ".";
                operation.textContent = parts.join("");

            }
        }
    }
    }
    equal_clicked = false;
});

const dot = document.querySelector(".dot");
dot.addEventListener("click", e=>{
    if(!Number.isNaN(Number(operation.textContent + "."))){
        operation.textContent += ".";
    }
    else if(Number.isNaN(Number(operation.textContent))){
        if(Number.isInteger(Number(operation.textContent.at(-1)))){
            let cleanText = operation.textContent.replace(/\s+/g, "");// remove all spaces
            parts = cleanText.split(/([+\-×÷])/);
            if(!Number.isNaN(Number(parts[2] + "."))){
                parts[2] += ".";
                operation.textContent = parts.join("");

            }
        }
    }
    equal_clicked = false;
})

const signBtn = document.querySelector(".signChange");
signBtn.addEventListener("click", e=>{
    if(Number.isInteger(Number(operation.textContent))){
        operation.textContent = -(Number(operation.textContent))
    }
})

