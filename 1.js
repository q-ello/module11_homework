function OddsAndEvens(){
    let arr = [1, 0, -3, "string", undefined, 18, null, -6];
    let odd = 0, even = 0;
    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] == "number" && arr[i] != 0){
            if (arr[i] > 0){
                if (arr[i] % 2 == 0) even++;
              else odd++;
            }
            else if (arr[i]*(-1) % 2 == 0) even++;
            else odd++;
        }
    }
    console.log(`В данном массиве ${even} чётных и ${odd} нечётных чисел.`);
}

OddsAndEvens();