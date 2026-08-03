function sum(limit){
    let tot = 0;
    
    for (let i = 1; i<=limit; i++){
        if ((i%3 === 0) || (i%5 === 0)) tot += i;
    }
    console.log(tot)
}

sum(10);
