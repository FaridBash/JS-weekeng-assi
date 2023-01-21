

function getCentury(year){

    let century=year/100;
    if(year%100!=0){
        century+=1;
    }

    return Math.floor(century) +" Century";
}
console.log(getCentury(1920));
