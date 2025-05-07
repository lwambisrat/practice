function Person(name,age){
    this.name=name;
    this.age=age;
    this.greet=function(){
        return `Hello my name is ${name} and i am ${age}years old`;
    }
};
const anne=new Person('Anne',23);
console.log({anne});
Person.prototype.nationality='kenyan';
console.log({anne});
console.log(anne.nationality);

//create a constructor functionDriver that takes in adriver's name,car model,and rating.
// add amethod using prototype call getdetails()that returns a formatted string with the drivers name and car model.

function Driver(name,carModel,rating){
    this.name=name;
    this.carModel=carModel;
    this.rating=rating;
}
Driver.prototype.getDetails=function(){
    return`The driver's name is ${this.name} and the car model is ${this.carModel}.`
};
const lwam=new Driver('Lwam','Fiyat',7);
console.log({lwam});
console.log(lwam.getDetails());

Driver.prototype.isTopRated=function(){
    if (this.rating>4.5){
       return 'true'
    }
};
console.log(lwam.isTopRated());

// 2 classes

class Car{
    constructor(model,color,plateNumber){
        this.model=model;
        this.color=color;
        this.plateNumber=plateNumber;
    }
    accelerate(speed){
        return`${this.model} accelerates at ${speed} km/hr`
    }
};
const toyota=new Car('Toyota','black','k444')
console.log({toyota});
console.log(toyota.accelerate(89));



//3
 class Student{
    constructor(name,course,scores){
        this.name=name;
        this.course=course;
        this.scores = scores;
    }
 }
 Student.prototype.totalScore=function(){
    return this.scores.reduce((acc,curr)=>acc+curr,0);
}
Student.prototype.average=function(){
    return this.totalScore()/this.scores.length;
}
Student.prototype.isPassing=function(){
    return this.average()>=50;
}
const lwan=new Student('aman','js',[20,34,78]);
console.log(lwan)
console.log('average',lwan.average());
console.log('average',lwan.totalScore());
console.log('average',lwan.isPassing());


class Bus extends Car{
    constructor(model,color,plateNumber,seats){
        super(model,color,plateNumber);
        this.seats=seats;
    }
}

const matatu=new Bus('Mazda','grey','Kev033',14)
console.log({matatu});
console.log(matatu.accelerate(65));

