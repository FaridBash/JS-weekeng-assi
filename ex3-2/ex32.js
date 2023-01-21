

// arrp=[[32,0],[12,14],[13,5]];

function numOfPeople(arr){
    let total=0;
    for(let i=0; i<arr.length; i++){
        const pIn=arr[i][0];
        const pOut=arr[i][1];
        total=total+pIn;
        if(total>=pOut){
            total=total-pOut;
        }
        else{
            console.log("This cant be");
            return;
        }
    }
return total;

}

console.log(numOfPeople(arrp));