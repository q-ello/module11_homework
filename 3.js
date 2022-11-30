function sum(a){
  return function(b){
    console.log(a + b);
    return a + b;
  }
}

let result = sum(10);
result(7);
