const div = document.querySelector('div');
div.style.width = window.innerWidth + 'px';
div.style.height = window.innerHeight + 'px';
window.onresize = () => {
  div.style.width = window.innerWidth + 'px';
  div.style.height = window.innerHeight + 'px';
};
