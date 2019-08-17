jQuery.fn.sum=function(){
    var sum=0;
    this.each(function(i,elementdom){
      
      sum+=parseFloat
      (elementdom.innerHTML);
      
    })
    return sum;
}