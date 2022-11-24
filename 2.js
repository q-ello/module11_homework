function checkNum(a){
    let check = 0;
    if (a > 1000){
        console.log("Данные неверны");
    }
    else {
        if (a != 0 && a!= 1){
            for (let i = 2; i<a; i++){
                if (a % i == 0){
                    check++;
                    break;
                }
            }
            if (a<0) check++;
        }
        else check = 2;
        if (check == 0){
            console.log("Это число простое.");
        }
        else if (check == 1) console.log("Это число составное.");
        else console.log("Это число не является ни простым, ни составным.")
    }
}