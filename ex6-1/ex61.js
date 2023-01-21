

function myLetters(str){
    const strArr=str.split("");
    let newStr='';
   for (let i = 0; i < str.length; i++) {
    for (let j = 0; j <=i; j++) {
        if(j===0){
            newStr=newStr+(strArr[i].toUpperCase());
        }
        else{
            newStr+=(strArr[i].toLowerCase());
        }     
    }
    if(i!=str.length-1){
        newStr+="-";
    }
    
   }

    return newStr;
}

console.log(myLetters("cwAt"));