// Problem 1
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

function printResult(rectangle) {
    const result = `Width = ${rectangle.width}, And Height = ${rectangle.height}`
    console.log(result);
}

const r1 = new Rectangle(2, 4);
printResult(r1);
r1.width = 10;
r1.height = 50;
printResult(r1);

// Problem 2
Rectangle.prototype.getArea = function () {
    // return this
    return this.width * this.height;
}
console.log(r1.getArea());


// problem 4
const person1 = {
    firstName: "Jhon",
    lastName: "Doe"
}

console.log(person1.firstName, person1.lastName);

// problem 5
person1.middleName = "Albert";
console.log(person1.firstName, person1.middleName, person1.lastName);

// problem 6
let person2Str = "firstName:'Harry', lastName:'Smith'";
// const person2Obj = eval('({' + person2Str + '})');
// const person2Obj = JSON.parse({person2Str});
// console.log(person2Obj)




// Person class

class Person {
    constructor(fname, lname, age, skills, address, dob, married, profession) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.skills = skills;
        this.dateofbirth = dob;
        this.address = address;
        this.married = married;
        this.profession = profession;
    }
}

const p1 = new Person("nikhil", "goud", 22, ["c"], "24/10/1996", {
    city: "hyderabad",
    pincode: "521185"
}, false, "Sr Analyst")
const p2 = new Person("harish", "chinna", 21, "HTML", "08/06/1997", {
    city: "Ameerpet",
    pincode: "500038"
}, false, "Jr Analyst")
// console.log(p1)
let print = function () {
    console.log(p1)
    console.log(p2)
}()

