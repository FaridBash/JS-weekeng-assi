

function fibonacci(start,n){
    const fibArr=[start,1]
    for (let i = 2; i <=n; i++) {
        
        fibArr.push(fibArr[i-2]+fibArr[i-1]);
    }

    return fibArr;
}

console.log(fibonacci(0,12));