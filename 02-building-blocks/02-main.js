const paraCats = document.querySelector('#cats');
const cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
let info = 'My casts are called ';

for (let i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {
    info += 'and ' + cats[i] + '.';
  } else {
    info += cats[i] + ', ';
  }
}

paraCats.textContent = info;

const input = document.querySelector('input');
const btn = document.querySelector('button');
const paraContacts = document.querySelector('#contacts');
input.focus();
const contacts = [
  'Chris:2232322',
  'Sarah:3453456',
  'Bill:7654322',
  'Mary:9998769',
  'Dianne:9384975',
];
btn.addEventListener('click', function () {
  const searchName = input.value.toLowerCase();
  input.value = '';
  input.focus();
  paraContacts.textContent = 'Contact not found.';
  for (let i = 0; i < contacts.length; i++) {
    const [contact, number] = contacts[i].split(':');
    if (contact.toLowerCase() === searchName) {
      paraContacts.textContent = `${contact}'s number is ${number}.`;
      break;
    }
  }
});
