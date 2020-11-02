// var obj={
//    name:'salman masud',
//     age:22,
//     email:'mdsalmanraselmasud@gmail.com',
//     print:function(){
//     console.log(this);
//     }
    
// }

// obj.print();

// function fn(){
//     console.log(this);
// }
// var a=fn.bind(obj)();
// // a()



var obj={
    name:'salman masud',
     age:22,
     email:'mdsalmanraselmasud@gmail.com',
     print:function(){
    //  console.log(this);
    setTimeout(function(){
obj.print();
    },200)
     }
     
 }

 