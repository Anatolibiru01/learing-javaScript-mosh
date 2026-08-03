function showlimit(limit){
    for (let idx = 0; idx <= limit; idx++) {
        let party = idx%2 === 0 ? "EVEN" : "ODD";
        console.log(idx, party);
    }
}

showlimit(10);
