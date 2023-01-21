


arr=[10, 343445353, 3453445, 3453545353453];

function myFunc(myArr){

    let firstMin=Number.MAX_VALUE;
    let secondMin=Number.MAX_VALUE;

    for (let index = 0; index < myArr.length; index++) {
        if(firstMin> parseInt(myArr[index])) firstMin=parseInt(myArr[index]);
    }

    for (let j = 0; j < myArr.length; j++) {
        
        if(secondMin>parseInt(myArr[j]) && firstMin<parseInt(myArr[j])) secondMin=parseInt(myArr[j]);
        
    }

    return firstMin+secondMin;

}

console.log(myFunc(arr));