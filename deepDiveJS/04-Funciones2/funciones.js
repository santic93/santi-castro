function concatenar (...args) {
  let str = ""

  for (let i = 0; i < args.length; i++) {
    str += args[i];
  }

  return str;
}



function invocarFunciones(...args) {
  let fn = ""
for (let i = 0; i < args.length; i++) {
   fn += args[i]()
  }
return fn;
}




function invocacionUnica(num){
    let numero = num()
    return function sumatoria(){
        return numero++
        
    }

}




function creadorDeIncrementos(num) {
  return function incrementaPor(numDos) {
    return(num+numDos)
  }
}


function incremetar(){
return function incremento(num){
 num++}
 return incremento()}




function objetoConClousure(){
let numero = 0
return {
incremento: function(){
numero++	
return numero;},

incrementoPor10:function(){
numero+=10
return numero;},

pedirValor:function(){
pedirValor=numero
return numero;},

cambiarValor:function(num){
numero = num
return numero;},
}
}


function ListaDeFuncionesInvitados (arregloInvitados, codigoSecreto){
        let arr = []
        for(let i=0;i < arregloInvitados.length; i++){
            let invitado = function(numero){
                if(numero===codigoSecreto){
                   return arregloInvitados[i]
                }else{
                  return `código secreto: invalido`
                }
            }
          arr.push(invitado);
        }
      return arr
    }
    
    
    
function armarListaDeInvitados(funcionesInvitados, codigoSecreto){
    let arr = []
    for(let i=0;i < funcionesInvitados.length; i+=1){
    let invi = funcionesInvitados[i](codigoSecreto)
    if (invi != `código secreto: invalido`) {
        arr.push(invi)
    }
    }
    return arr
}
