let obj={}
function setPropsOnObj(obj){
obj["p"] = 5;
obj["plataforma"]=5;
obj["proximo"]=function(num){
let acu = 0
acu += num+1
return (acu)}
obj["la"]={clave:{secreta:{es:404}}}}




let array = []
function setPropsOnArr(array){
array["hola"]=function(){
return ("Hola!")
}
array["river"]="plate";
array[0]=5;
array["doble"]=function(num){
return (num*2)
}
}


let functionObject = {}
function  setPropsOnFunc(functionObject){
let str = ("Soy una función con propiedades!")
functionObject.year = "2017";
functionObject["mitad"]=function(num){
return (num/2)}
Object.prototype.helloWorld=function(){
return "Hello World"}
return (str)
}








