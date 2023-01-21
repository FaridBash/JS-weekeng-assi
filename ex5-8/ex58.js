

function longest(str){
    const strArr=str.split(" ");
    const strLength={}
    let max=strArr[0].length;
    for (let i = 0; i < strArr.length; i++) {
        if(strArr[i]!=""){
            strLength[strArr[i]]=strArr[i].length;
            if(strArr[i].length>max){
                max=strArr[i].length;
            }
        }
    }

    for (const key in strLength) {
        if(strLength[key]===max){
            console.log("Longest word/s: "+key);
        }
    }
    

}

console.log(longest("Farid I Bashiti aaawwwe is the of"));