// let obj={
//     name:'rasel hosain',
//     age:21,
//     email:'mdsalmanmasud@gmail.com'

// }



// constructor

function Person(name,age,email){
this.name=name;
this.age=age;
this.email=email;
}

var p1=new Person('md.salmanMasud',22,'mdsalmanmasud@gamil.com','abc');
var p2=new Person('md.raselHosain',21,'mdusmangoni926@gamil.com','abc');
var p3=new Person('mss.aysha akter',40,'ayshaakter@gamil.com','abc');
console.log(p1);

Person.prototype.protpholio=' '+'licence : shc';
Person.prototype.hello=function(){
 console.log('hello : '+this.name+this.protpholio);
}
// p1.hello();
p2.hello();
p3.hello();
console.log(p1);

function student(name){
this.name=name;
}
var student1=new student('mamun');
 student.prototype= Object.create(Person.prototype);

student.prototype.constructor=student;
