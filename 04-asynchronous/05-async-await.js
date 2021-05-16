const hi = () => 'hi';
const hey = async () => 'hey';
const hello = async () => Promise.resolve('hello');
console.log(hi());
console.log(hey());
console.log(hello());
hey().then(console.log);
hello().then(console.log);

function timeoutPromise(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve('done');
    }, interval);
  });
}
async function timeTestSlow() {
  // await the timeoutPromise() calls directly, await one by one
  await timeoutPromise(3000);
  await timeoutPromise(3000);
  await timeoutPromise(3000);
}
async function timeTestFast() {
  // they run simultaneously
  const timeoutPromise1 = timeoutPromise(3000)
  const timeoutPromise2 = timeoutPromise(3000)
  const timeoutPromise3 = timeoutPromise(3000)
  // await their results
  await timeoutPromise1
  await timeoutPromise2
  await timeoutPromise3
}
let startTime = Date.now();

//timeTestSlow().then(() => {
//  let finishTime = Date.now();
//  let timeTaken = finishTime - startTime;
//  console.log('Time taken (slow) in milliseconds: ' + timeTaken);
//});
//
//timeTestFast().then(() => {
//  let finishTime = Date.now();
//  let timeTaken = finishTime - startTime;
//  console.log('Time taken (fast) in milliseconds: ' + timeTaken);
//});




class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  async greeting() {
    return await Promise.resolve(`Hi! I'm ${this.name.first}`);
  };

  farewell() {
    console.log(`${this.name.first} has left the building. Bye for now!`);
  };
}

let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);
han.greeting().then(console.log)
