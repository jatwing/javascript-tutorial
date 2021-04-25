let string = 'This is my string';

let browser = 'mozilla';
console.log(browser.length);

console.log(browser[0]);
console.log(browser[browser.length - 1]);

console.log(browser.indexOf('zilla'));
console.log(browser.indexOf('vanilla'));
if (browser.indexOf('mozilla') === -1) {
  console.log('The "mozilla" substring is NOT contained within it.');
} else {
  console.log('The "mozilla" substring IS contained within it.');
}
console.log(browser.slice(0, 3));
console.log(browser.slice(2));

let radData = 'My NaMe Is MuD';
console.log(radData.toLowerCase(), radData.toUpperCase());

console.log(browser.replace('moz', 'van'));
