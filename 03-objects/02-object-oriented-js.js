function Person(first, last, age, gender, interests) {
  this.name = {
    first: first,
    last: last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function () {
    let pronoun = 'He'
    if (this.gender === 'female') {
      pronoun = 'She'
    }
    const temp = this.interests.slice()
    temp[temp.length - 1] = 'and ' + temp[temp.length - 1]
    console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.` + ` ${pronoun} likes ${temp.join(', ')}.`)

  };
  this.greeting = function () {
    console.log("Hi! I'm " + this.name.first + ".");
  };
}
let person1 = new Person("Bob", "Smith", 32, "male", ["music", "skiing"]);

console.log(person1["age"], person1.interests[1]);
person1.bio();
