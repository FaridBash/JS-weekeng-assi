

function myFunc(sq){
    const myRoot=Math.pow(sq,0.5);
    if(Number.isInteger(myRoot)){
        const nextS=myRoot+1;
        return Math.pow(nextS, 2);
    }
    else{
        console.log("Not perfect square");
        return -1;
    }
}

console.log(myFunc(114));