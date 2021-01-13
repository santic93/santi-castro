
function duplicar(n) {
  return n*2
}





function map(array, duplicar) {
let arr=[]
let res = 0
  for(let i = 0;i<array.length;i++){
 res = duplicar(array[i])
 arr.push(res)
}
return arr
}

function filter(array,fn){
let arr = []
for(let i = 0;i<array.length;i++){
if(fn(array[i])===true){
arr.push(array[i])
}
}
return arr
}


function contains(arrObj,valor){
for(let propiedad in arrObj){
if(arrObj[propiedad] === valor){
return true}
}
return false
}


function cuentaPalabras(str){
let cont = 0
let copia = str.split(" ")
for(let i = 0;i<copia.length;i++){
cont++}
return cont
}

function reduce(array,num,fn){
for (let i = 0;i<array.length;i++){
num = fn(array[i],num)}
return num
}

function cuentaPalabrasReduce(str,num){
return cuentaPalabras(str)+num}


function sumar(a,b){
return a+b}
function suma(arr){
let resultado = reduce(arr,0,sumar)
return resultado}


function every(arr,fn){
let arreg=[]
    for (let i = 0; i < arr.length; i++) {
    arreg.push(arr[i])
        if(reduce(arreg,0,fn) === false){
            return false
        }
    }
    return true     
}

function any(arr,fn){
    let arreg=[]
    for (let i = 0; i < arr.length; i++) {
    arreg.push(arr[i])
       if(reduce(arreg,0,fn) === true){
            return true
        }
    }
    return false 
}
