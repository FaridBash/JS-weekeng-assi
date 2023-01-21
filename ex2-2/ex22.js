

arr=[1,1,1,1,1,1];

function myFunc(myArr){
    let sum=0;
    for (let i = myArr.length-1; i >=0 ; i--){
        if(myArr[i]===1){
            sum+=Math.pow(2, (myArr.length-1)-i);
        }
    }
return sum;
}

console.log(myFunc(arr));