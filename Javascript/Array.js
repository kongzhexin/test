//reduce的原生实现  
//param
//fn 函数 (preValue,currentValue,index,array)
//initValue初始值
Array.prototype.reduce = function(fn,initValue){
    var index,value,
        length = this.length >>>0;
        isValueSet =false;
    if(arguments.length >1){
        value = initValue;
        isValueSet =true;
    }
    for(index=0;index<length;index++){
        if(isValueSet){
            value = fn(value,this[index],index,this)
        }else{
            value =this[index];
            isValueSet =true;
        }
    }
    return value;
}
// var a=[1,2,3],
//     b =a.reduce(function(pre,cur){
//     return pre+cur;
// },1)