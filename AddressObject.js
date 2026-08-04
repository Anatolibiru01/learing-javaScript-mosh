const address = {
    street: "Hangatu",
    city: "Adama",
    Zipcode: 10000
};

function showAddress(address){
    for (let key in address){
        console.log(key+": "+ address[key]);
    }
}
showAddress(address)
