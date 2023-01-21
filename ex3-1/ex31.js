

function nb_year(p0, percent, aug, p ){
    let year=0;
    const perc=parseFloat(percent)/100;
    while(p0<p){
        p0=p0+(p0*perc)+aug;
        year++;
    }
    return year;
}

console.log(nb_year(1500000, 2.5, 10000, 2000000));