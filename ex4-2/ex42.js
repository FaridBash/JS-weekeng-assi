

function tribonacci(arr, n){

    for (let i = 3; i <=n; i++) {
        arr.push(arr[i-3]+arr[i-2]+arr[i-1]);
    }

    return arr;
}

console.log(tribonacci([1,1,1],12));