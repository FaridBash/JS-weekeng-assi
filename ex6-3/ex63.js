

function longest(str1,str2){
    a=str1.toLowerCase();
    b=str2.toLowerCase();
    let newStr='';
    const newArr=[];
    for (let i = 0; i < a.length; i++) {
        
        if(!newArr.includes(a[i])){
            newArr.push(a[i]);
        }
        
    }
    for (let i = 0; i < b.length; i++) {
        
        if(!newArr.includes(b[i])){
            newArr.push(b[i]);
        }
    }
    newArr.sort();
    for (let i = 0; i < newArr.length; i++) {
        newStr+=newArr[i];
    }
    return newStr;

}

console.log(longest("xxyyyaaaasssbbb","mmAAwcccww"));
