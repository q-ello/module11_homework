function sum(a){
  return function(b = 7){
    console.log(a + b);
    return a + b;
  }
}

let result = sum(10);
result();