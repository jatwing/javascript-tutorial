const person = {
  name: {
    first: 'Bob',
    last: 'Smith',
  },
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio: function () {
    console.log(
      `${this.name.first} ${this.name.last} is ${this.age} years old. He likes ${this.interests[0]} and ${this.interests[1]}.`
    );
  },
  greeting: function () {
    console.log(`Hi! I'm ${this.name.first}.`);
  },
};
console.log(person.name, person.age, person.gender, person.interests);
person.bio();
person.greeting();

person.age = 45;
person['name']['last'] = 'Cratchit';
console.log(person.age, person['name']['last']);

person['eyes'] = 'hazel';
person.farewell = function () {
  console.log('Bye everybody!');
};
console.log(person['eyes']);
person.farewell();

let myDataName = 'height';
let myDataValue = '1.75m';
person[myDataName] = myDataValue;
console.log(person.height);

const person1 = {
  name: 'Chris',
  greeting: function () {
    console.log(`Hi! I'm ${this.name}.`);
  },
};
const person2 = {
  name: 'Deepti',
  greeting: function () {
    console.log(`Hi! I'm ${this.name}.`);
  },
};
person1.greeting();
person2.greeting();
