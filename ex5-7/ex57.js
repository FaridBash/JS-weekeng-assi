

function shortest(str){
    const strArr=str.split(" ");
    const strLength={}
    let min=strArr[0].length;
    for (let i = 0; i < strArr.length; i++) {
        if(strArr[i]!=""){
            strLength[strArr[i]]=strArr[i].length;
            if(strArr[i].length<min){
                min=strArr[i].length;
            }
        }
    }

    for (const key in strLength) {
        if(strLength[key]===min){
            console.log("Shortest word/s: "+key);
        }
    }
    

}

console.log(shortest("Farid I Bashiti is the of"));