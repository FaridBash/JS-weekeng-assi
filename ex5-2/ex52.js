

function repeatStr(times, str){
    let newStr='';
    for (let i = 1; i <= times; i++) {
        newStr+=str;
    }

    return newStr;
}

console.log(repeatStr(5,"Aa"));