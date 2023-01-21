

function findUniq(arr){
    let num1=arr[0];
    let num2=arr[1];
    let num3=arr[2];
    if(num1===num2){
        for (let i = 2; i < arr.length; i++) {
         if(num1!==arr[i]){
            return arr[i];
            }
        
        }
    }
    if(num1!=num2){
        for (let index = arr.length-1; index >= 0; index--){
            if(arr[index]!=num3){
                return arr[index];
            }
        }
    }
    
}

console.log(findUniq([0.5,0,0,0]));