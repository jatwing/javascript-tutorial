function Person(first, last, age, gender, interests) {
  this.name = {
    first: first,
    last: last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function () {
    let pronoun = 'He';
    if (this.gender === 'female') {
      pronoun = 'She';
    }
    let interestsString = '';
    for (let i = 0; i < interests.length; i++) {
      if (i === 0) {
        interestsString += interests[i];
      } else if (i === interests.length - 1) {
        interestsString += ' and ' + interests[i];
      } else {
        interestsString += ', ' + interests[i];
      }
    }
    console.log(
      `${this.name.first} ${this.name.last} is ${this.age} years old.` +
        ` ${pronoun} likes ${interestsString}.`
    );
  };
  this.greeting = function () {
    console.log(`Hi! I'm ${this.name.first}.`);
  };
}
let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

console.log(person1['age'], person1.interests[1]);
person1.bio();


let person2 = Object.create(person1);
console.log(person2.name)
person2.greeting()




