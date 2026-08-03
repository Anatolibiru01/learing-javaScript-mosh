// string property

function showProperty(obj){
    for (let str in obj){
        if (typeof obj[str] === "string")
            console.log(str, obj[str]);
    }
}
const movie = {
    title: 'a',
    release: 1990, 
    director: 'mosh'
};
showProperty(movie)
