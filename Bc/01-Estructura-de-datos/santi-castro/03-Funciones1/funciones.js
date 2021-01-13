function crearCalculadora(){

let calculadora = {}

let resultado = 0

calculadora["valor"] = function(){
return resultado}

calculadora["sumar"] = function(...args){
 for (let i = 0; i < args.length; i++) {
    resultado += args[i];
    return resultado
  }}
 
calculadora["restar"] = function(...args){
 for (let i = 0; i < args.length; i++) {
    resultado -= args[i];
    return resultado
  }}
  

calculadora["reset"]= function(){
resultado = 0
return resultado
}
 return (calculadora)

}



