

function toWeirdCase(str){
    let newStr='';
    for (let i = 0; i < str.length; i++) {
       
        if(i===0 || i%2===0){
            newStr+=(str[i].toUpperCase());
        }
        else{
            newStr+=(str[i].toLowerCase());
        }
    }

    return newStr;

}

console.log(toWeirdCase("hAppy birthday"));