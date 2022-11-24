function sum(a){
    return function(b){
      console.log(a + b);
      return a + b;
    }
}

let result = f1(num);
a();