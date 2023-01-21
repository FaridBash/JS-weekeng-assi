
function basicMath(sign, num1, num2){

    switch(sign){
        case "+":
            return num1+num2;
        case "-":
            return num1-num2;
        case "*":
            return num1*num2;
        case "/":
            return  num2!=0 ? num1/num2:"Cant divide by zero";
        default:
            return "wrong sign";
    }

}

console.log(basicMath("/", 49,2));