// function hellow(name,print){
//     print(name);
// }

// hellow('md.salman masud',(name)=>{
//     console.log('hello! '+name);
// });

// hellow('md.Rasel Hosain',(name)=>{
//     console.log('hello! '+name);
// });
// hellow('md.nazmul hasan',(name )=>{
//     console.log(('hello! '+name.toUpperCase()));
// });
// hellow('md.sayful islam',(name)=>{
//     console.log('name  length is :'+name.length);
// });
// human={
//     name:"md.salman",
//     age:"please type your age",
//     skils:"html,css,javascript,node js,wordpress,python,PHP",
//     Email:"mdsalmanmasud@gmail.com"
// }

// function lifstyle(mode,event1,event2){

//     console.log(mode);
//     if(mode.age>=18){
//         event1(mode.Email);
//         event2(mode.Email);

//     }
//     // else if(mode.age==!number){
//     //     document.write('you are type a wrong charecter')
//     // }
    
    
//     else{ document.write('you are little 18 yars old..! sorry leave this page'); 
//     }
    
// }
// lifstyle(human,function email(event1){
    
//     document.write('customer email is(uppercase) : '+event1.toUpperCase()+'<br/>');
//     document.write(event1.length+'<br/>');
// },function email2(event2){
//     document.write('customer email is(lowercase) : '+event2+event2.length);
// });


// return function to function 

function host() {
    console.log('i am host function');

    function child() {
        console.log('i am achild');
    }
    return child
};
host()();
