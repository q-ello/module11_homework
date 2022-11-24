function printNums(a, b){
    let curr = a;
    let intervalId = setInterval(function(){
        console.log(curr);
        if (curr == b) clearInterval(intervalId);
        curr++;
    }, 1000)
}