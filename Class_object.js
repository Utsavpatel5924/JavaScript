// let x=new Date();
// console.log(x);

//object and class

// let man={
//     firstname:"Utsav",
//     lastname:"Suhagiya",
//     email:"utsav@test.in"
// };

// console.log(man);

// dot notation
// console.log(man.email);

// ["key"]

// console.log(man["email"]);
// delete man.email;

// console.log(man);

// man.hobby="reading"

// console.log(man);

class Car {
    constructor(name, year) {
            this.name = name;
            this.year = year;
    }
    age() {
            const date = new Date();
            return date.getFullYear() - this.year;
    }
};

const myCar = new Car("Ford", 2004);
console.log(myCar.age() + 'Years old.');


