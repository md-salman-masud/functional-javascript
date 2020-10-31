// create an map funtion
var arr=[1,2,3,4,5,6,7,8,9,14,545,566,45,7,85,];

function stucture(arr,callback){
    var newarr =[];
    for(var i=0; i<arr.length; i++){
       newarr.push(callback(arr[i]));
       
    }
return newarr;
}
var map=stucture(arr,function(call){
    return call +(5+5);
    

})
console.log(map);