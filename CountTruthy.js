function countTruthy(array){

    let count = 0;
    for (let truth of array){
        if (truth) count++;
    }
    console.log(count);
}
let array = ['', 0, 1,3,4];
countTruthy(array);
