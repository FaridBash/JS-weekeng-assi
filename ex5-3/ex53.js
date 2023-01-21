

// oCamelCase("the-stealth-warrior") // returns "theStealthWarrior" 
 
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toCamelCase(str){
    let newStr="";
    if(str.length!=0){
        newStr+=str[0];
    }
    for(let i=1; i<str.length; i++){
        if(((str[i-1]==="-" || str[i-1]==="_")&& i!=str.length-1)){
            newStr+=(str[i].toUpperCase());
        }
        else if(str[i]!="-" && str[i]!="_"){
            newStr+=str[i];
        }
    }

    return newStr;
}

console.log(toCamelCase("the-stealth-warrior"));