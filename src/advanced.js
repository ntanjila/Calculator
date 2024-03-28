
function pow(x, n) {
    return Math.pow(x, n);
  }
  
 
  function modulo(a, b) {
    return a % b;
  }
  

  console.log(pow(2, 3)); 
  console.log(modulo(10, 3)); 
  module.exports ={
    pow,
    modulo
}