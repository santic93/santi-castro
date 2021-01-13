
function factorialIterativo (n){
let acu = 1
while (n > 0){
	acu *= n 
	n--}
return acu
}


function factorial(num, tot = 1) {
  if(num === 0) return tot;
else{
  tot *= num;
  num -= 1;
  
  return factorial(num, tot);
}
}

function fib(n){
if(n <= 1) return 1
else{
return fib(n-1) + fib(n-2)
}
}
function factores(n,i=2,arr=[]) {
    if(n===1){
        return arr
    }else if(!(n%i)){
        n = n/i
        arr.push(i)
     
    }else{
        i++
    }
    return factores(n,i,arr)
}
