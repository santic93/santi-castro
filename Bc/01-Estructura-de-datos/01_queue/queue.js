function Queue() {
    this.array = []
    this.head = 0
    
    // Podés usar un objeto o un arreglo para guardar tu data. Así vas a mantener un head y tail como puntero que cambia cuando funciones como enqueue y dequeue son llamadas.
    
    // this.tail = function () {
    //     let indice = 0 
    //     while(this.array[indice] !== undefined){            
        //         indice++
    //     }
    //     return this.array[indice-1]   
    // }
    
    
    // let punteros --> head tail
    // head = 0
    
}

Queue.prototype.enqueue = function () {
     let indice = 0 
        while(this.array[indice] !== undefined){            
            indice++
        }
         this.array[indice] = arguments[0]
        }
        
Queue.prototype.dequeue = function () {
    this.temp = this.array 
    this.array = []
    
    let indice = 0
    while (this.temp[indice+1] !== undefined){
        this.array[indice] = this.temp[indice+1]    
        indice++
    }
    return this.temp[this.head] 
}

Queue.prototype.size = function () {
        let indice = 0 
        while(this.array[indice] !== undefined){            
            indice++
        }
        return indice   
}
