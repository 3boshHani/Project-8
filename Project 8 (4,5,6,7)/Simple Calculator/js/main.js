let firstNum = "";
let math = "";
let lastNum = "";

// to update the screen all time 
let update = () => {
    document.getElementById("result").textContent = firstNum
}

// to clear the result
let clearing = () => {
    math = ""
    firstNum = ""
    lastNum = ""
    update()
}
// to add numbers to the calc
let addNum = (num) => {
    num === "0" ? num = firstNum : firstNum += num;
    update()
}

// to add the func 
let addMath = (ma) => {
    math = ma;
    lastNum = firstNum;
    firstNum = "";
}
// the calc btn 

let calc = () => {
    let result;
    switch (math) {
        case "+":
            result = parseFloat(lastNum) + parseFloat(firstNum);
            break;
        case "-":
            result = parseFloat(lastNum) - parseFloat(firstNum);
            break;
        case "*":
            result = parseFloat(lastNum) * parseFloat(firstNum);
            break;
        case "/":
            (firstNum ==="0") ? result= "Cannot Divide On Zero" :result = parseFloat(lastNum) / parseFloat(firstNum);
            break;
    }
    firstNum = result;
    math = "";
    lastNum ="";
    update();
}