

function intoIntials(str){
    let sCounter=0;
    let init=str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        if(str[i]===" "){
            sCounter++;
            init+=".";
        }
        if(str[i-1]===" ") init+=str[i].toUpperCase();
        
    }

    if(sCounter>1 || str[0]===" ") return "Name is not suitable";
    return init;

}

console.log(intoIntials(" farid bashiti"));