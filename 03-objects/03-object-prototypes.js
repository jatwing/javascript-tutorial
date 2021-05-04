function Foobar() {}
console.log(typeof Object.getPrototypeOf(Foobar), typeof Foobar.prototype);
let fooInstance = new Foobar();
console.log(typeof Object.getPrototypeOf(fooInstance), typeof Foobar.prototype);

class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first: first,
      last: last,
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }
  bio() {
    var string = `${this.name.first} ${this.name.last} is ${this.age} years old.`;
    var pronoun;
    if (
      this.gender === 'male' ||
      this.gender === 'Male' ||
      this.gender === 'm' ||
      this.gender === 'M'
    ) {
      pronoun = 'He likes ';
    } else if (
      this.gender === 'female' ||
      this.gender === 'Female' ||
      this.gender === 'f' ||
      this.gender === 'F'
    ) {
      pronoun = 'She likes ';
    } else {
      pronoun = 'They like ';
    }
    string += pronoun;
    if (this.interests.length === 1) {
      string += this.interests[0] + '.';
    } else if (this.interests.length === 2) {
      string += this.interests[0] + ' and ' + this.interests[1] + '.';
    } else {
      for (var i = 0; i < this.interests.length; i++) {
        if (i === this.interests.length - 1) {
          string += 'and ' + this.interests[i] + '.';
        } else {
          string += this.interests[i] + ', ';
        }
      }
    }
    console.log(string);
  }
  greeting() {
    console.log(`Hi! I'm ${this.name.first}.`);
  }
}

let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
console.log(JSON.stringify(person1.valueOf()));

console.log(Person.prototype);
console.log(Object.prototype);

let person2 = Object.create(person1);

console.log(person1.__proto__);
console.log(person2.__proto__);
console.log(person1.constructor);
console.log(person2.constructor);

let person3 = new person1.constructor('Karen', 'Stephenson', 26, 'female', [
  'playing drums',
  'mountain climbing',
]);
console.log(person3.name.first, person3.age);
person3.bio();

console.log(person1.constructor.name);

// modify the prototype

let person4 = new Person('Tammi', 'Smith', 32, 'neutral', [
  'music',
  'skiing',
  'kickboxing',
]);

Person.prototype.farewell = function () {
  console.log(this.name.first + ' has left the building. Bye for now!');
};
person4.farewell();
delete Person.prototype.farewell;
console.log('farewell' in person4);

//person4.farewell();

//Person.prototype.fullName = this.name.first + " " + this.name.last;
// does not make sense
// Constructor with property definitions

// a common pattern to design object
function Test(a, b, c, d) {}
Test.prototype.x = function () {};
Test.prototype.y = function () {};

// ECMA 2015 classes
// @see https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance#ecmascript_2015_classes
class A {
  constructor() {}

  greeting() {}
}
