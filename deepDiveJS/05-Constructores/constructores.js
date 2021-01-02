function CalculadoraNPI (){
  this.arr = []
  this.res
}

CalculadoraNPI.prototype.agregar = function(){
for(let i = 0;i<arguments.length;i++){
this.arr.push(arguments[i])}
}

CalculadoraNPI.prototype.sumar = function(){
if(this.arr.length >= 2){
this.res = this.arr.pop() + this.arr.pop()
this.arr.splice(1,2)
this.arr.push(this.res)
}
else{
throw ('La calculadoraNPI necesita por lo menos 2 números')}
},

CalculadoraNPI.prototype.restar = function(){
if(this.arr.length >= 2){
this.res = (this.arr[0] - this.arr[1])
this.arr.splice(1,2)
this.arr.push(this.res)
}
else{
throw ('La calculadoraNPI necesita por lo menos 2 números')
}
},

CalculadoraNPI.prototype.dividir = function(){
if(this.arr.length >= 2){
this.res = (this.arr[length] / this.arr[length+1])
this.arr.splice(1,2)
this.arr.push(this.res)
}
else{
throw ('La calculadoraNPI necesita por lo menos 2 números')
}
}


CalculadoraNPI.prototype.multiplicar = function(){
if(this.arr.length >= 2){
this.res = (this.arr[length-1] * this.arr[length])
this.arr.push(this.res)
}
else{
throw ('La calculadoraNPI necesita por lo menos 2 números')
}
}


CalculadoraNPI.prototype.valor = function(){
    return this.res
}
