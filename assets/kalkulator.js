const calculator = {
    displayNumber :'0',
    operator : null,
    firstNumber : null,
    waitingforSecondNumber: false
};

function updateDisplay(){
    document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}

function clearCalculator(){
    calculator.displayNumber ='0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitingforSecondNumber = false;
}

function inputDigit(digit){
    calculator.displayNumber += digit;
}

const buttons = document.querySelectorAll(".button")
    for(let button of buttons){
        button.addEventListener('click', function(event){

            const target = event.target;
       
            if(target.classList.contains('clear')){
                clearCalculator();
                updateDisplay();
                return;
            }

            if(target.classList.contains('negative')){
                inverseNumber();
                updateDisplay();
                return;
            }
       
            if(target.classList.contains('equals')){
                performCalculation();
                updateDisplay();
                return;
            }

            if(target.classList.contains('operator')){
                handleOperator(target.innerText);
                return;
            }


            inputDigit(target.innerText);
            updateDisplay()
        
       });
    }

function inputDigit(digit){
    if(calculator.displayNumber === '0'){
      calculator.displayNumber = digit;
    }else{
        calculator.displayNumber+= digit;
    }
}

function inverseNumber() {
    if(calculator.displayNumber === '0'){
        return;
    }
    calculator.displayNumber = calculator.displayNumber *-1;
}

function handleOperator(operator){
    if(!calculator.waitingforSecondNumber){
        calculator.operator=operator;
        calculator.waitingforSecondNumber = true;
        calculator.firstNumber=calculator.displayNumber;

        calculator.displayNumber='0';
    }else{
        alert('Operator sudah ditetapkan')
    }

const history = {
    firstNumber: calculator.firstNumber,
    secondNumber: calculator.displayNumber,
    operator:calculator.operator,
    result:result
}

putHistory(history);
calculator.displayNumber =result;
renderHistory();

}

function performCalculation(){
    if(calculator.firstNumber==null || calculator.operator==null){
        alert('Anda belum menetapkan operator');
        return;
    }

    let result =0;
    if(calculator.operator==='+'){
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    }else{
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
    }

    calculator.displayNumber = result;
    
    const history = {
        firstNumber: calculator.firstNumber,
        secondNumber: calculator.displayNumber,
        operator:calculator.operator,
        result:result
    }
    
    putHistory(history);
    calculator.displayNumber =result;
    renderHistory();
}

