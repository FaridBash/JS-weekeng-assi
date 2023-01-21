
function issIsogram(str){
    const newStr=str.toLowerCase();
    console.log(newStr);

    for (let i = 0; i < newStr.length; i++) {
        
        for (let j = i+1; j < newStr.length; j++){
           if(newStr[i]===newStr[j]){
            console.log(newStr[i]+"  "+newStr[j]);
            return false;
           } 
        }
    }
    return true;
}

console.log(issIsogram("fFarid"));