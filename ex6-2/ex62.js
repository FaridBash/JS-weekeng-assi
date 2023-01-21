

function repeated(str){
    const lettersArr=str.split("");
    let count=0;
    const letterObj={};
    let letter='';
    lettersArr.sort();

    for (let i = 0; i < lettersArr.length; i++) {
        letter=lettersArr[i];
        for (let j = i; j < lettersArr.length; j++) {
            if(letter===lettersArr[j]){
                count++;
                i=j;
            }
            
        }
        letterObj[letter]=count;
        count=0;
    }

    for (const key in letterObj){
        if(letterObj[key]>1){
            console.log(key+" appeared "+letterObj[key]+" times");
        }
    }

    
}

repeated("fareed");