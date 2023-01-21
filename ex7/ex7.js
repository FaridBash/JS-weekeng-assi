
// filter

const car=[
    {name: "ford",
    year: 99},
    {name: "mercedes",
    year: 99},
    {name: "mer",
    year: 98},
];

function filterDemo(arr, key, value){
    const newArr=[];
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i][key]);
        if(arr[i][key]===value){
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

console.log(filterDemo(car, "year", 98));


function forEachDemo(arr,key){
    const newArr=[];
    for (let i = 0; i < arr.length; i++) {
       newArr.push(arr[i][key]);
    }

    return newArr;
}
console.log("====================================");
console.log(forEachDemo(car, "name"));
function mapDemo(arr){
    const newArr=[];
    for(let key of arr )
    {
        newArr.push(key);
    }
    return newArr;
}

console.log("======================================");
console.log(mapDemo(car));
