// create needed constants
const rememberDiv = document.querySelector('.remember');
const forgetDiv = document.querySelector('.forget');
const form = document.querySelector('form');
const nameInput = document.querySelector('#entername');
const submitBtn = document.querySelector('#submitname');
const forgetBtn = document.querySelector('#forgetname');

const h1 = document.querySelector('h1');
const personalGreeting = document.querySelector('.personal-greeting');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

const nameDisplayCheck = () => {
  // check whether the 'name' data item is stored in web Storage
  if (localStorage.getItem('name')) {
    // If it is, display personalized greeting
    let name = localStorage.getItem('name');
    h1.textContent = 'Welcome, ' + name;
    personalGreeting.textContent =
      'Welcome to our website, ' +
      name +
      '! We hope you have fun while you are here.';
    // hide the 'remember' part of the form and show the 'forget' part
    forgetDiv.style.display = 'block';
    rememberDiv.style.display = 'none';
  } else {
    // if not, display generic greeting
    h1.textContent = 'Welcome to our website ';
    personalGreeting.textContent =
      'Welcome to our website. We hope you have fun while you are here.';
    // hide the 'forget' part of the form and show the 'remember' part
    forgetDiv.style.display = 'none';
    rememberDiv.style.display = 'block';
  }
};

submitBtn.addEventListener('click', () => {
  localStorage.setItem('name', nameInput.value);

  nameDisplayCheck();
});

forgetBtn.addEventListener('click', () => {
  localStorage.removeItem('name');
  nameDisplayCheck();
});

document.body.onload = nameDisplayCheck;