

function mask(str){
    let newStr="";
    if(str.length>4){

        for (let i = 0; i < str.length; i++) {
            
            if(i>=str.length-4){
                newStr+=str[i];
            }
            else newStr+="#";
            
        }    
        return newStr;
    }
    return str;
}

console.log(mask("161"));