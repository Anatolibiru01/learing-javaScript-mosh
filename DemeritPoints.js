checkspeed(77);

function checkspeed(speed){
    if (speed < 75) 
        console.log("OK");
    else{
        let point = Math.floor((speed - 70)/5);

        if (point > 12) console.log("suspended");
        else console.log("Point: " + point)
    };
}
