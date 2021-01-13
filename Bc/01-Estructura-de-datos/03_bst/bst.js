function BinarySearchTree(valor){
    this.count=1;
    this.value=valor;
    this.left=null; 
    this.right=null;
}

BinarySearchTree.prototype.insert= function(valor){
    this.count ++
    if(valor>this.value){
        if(!this.right){
        this.right=new BinarySearchTree(valor)
        }else {
                return this.right.insert(valor)
        }
    } else if (valor<this.value){
        if (!this.left){
            this.left=new BinarySearchTree(valor)
        }else {
               return this.left.insert(valor)
        }
    }
} 


BinarySearchTree.prototype.contains= function(valor){
    if(valor===this.value){return true} 
    else if(valor>this.value){
        if(!this.right){
        return false
        }else {
                return this.right.contains(valor)
        }
    } else if (valor<this.value){
        if (!this.left){
            return false
        }else {
               return this.left.contains(valor)
        }
    }
}
BinarySearchTree.prototype.depthFirstForEach= function(fn, option ){
if (option === "in-order"){
    if (this.left){// revista si hay valor en la izquierda y si hay vuelve a ejeceutar bFFE
        this.left.depthFirstForEach(fn,option)
    }
    fn(this.value)//procesa
    if (this.right){
        this.right.depthFirstForEach(fn,option)
    }
}
if (option='pre-order'){
    fn(this.value)//procesa
}
    if (this.left){// revista si hay valor en la izquierda y si hay vuelve a ejeceutar bFFE
        this.left.depthFirstForEach(fn,option)
    } 
    
    if (this.right){
        this.right.depthFirstForEach(fn,option)
    }
    if(option="post-order"){
        if(this.left){
            this.left.depthFirstForEach(fn,option)
        }
        if(this.rigth){
            this.rigth.depthFirstForEach(fn,option)
        }
        fn(this.value)

    }

}

BinarySearchTree.prototype.breadthFirstForEach= function() {
    



}

BinarySearchTree.prototype.size= function(){
    return this.count
}
