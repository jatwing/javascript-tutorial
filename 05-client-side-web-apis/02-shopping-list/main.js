const ul = document.querySelector('ul');
const input = document.querySelector('input');
const buttonAdd = document.querySelector('button');
const handleAdd = () => {
  const value = input.value;
  input.value = '';
  const li = document.createElement('li');
  const span = document.createElement('span');
  const buttonDelete = document.createElement('button');
  li.appendChild(span);
  li.appendChild(buttonDelete);
  span.textContent = value;
  buttonDelete.textContent = 'Delete';
  ul.appendChild(li);
  const handleDelete = () => {
    ul.removeChild(li);
  };
  buttonDelete.addEventListener('click', handleDelete);
};
buttonAdd.addEventListener('click', handleAdd);
