const link = document.querySelector('a');
link.textContent = 'Mozilla Developer Network';
link.href = 'https://developer.mozilla.org';

const section = document.querySelector('section');
const p = document.createElement('p');
p.textContent = 'We hope you enjoyed the ride.';
section.appendChild(p);
const text = document.createTextNode(
  ' — the premier source for web development knowledge.'
);
const linkPara = document.querySelector('p'); // the first one
linkPara.appendChild(text);

/*
 * moving and removing elements
 */
section.appendChild(linkPara);
// section.removeChild(linkPara)
// linkPara.parentNode.removeChild(linkPara)

/*
 * manipulating styles
 */
// p.style.color = "white";
// p.style.backgroundColor = "black";
// p.style.padding = "10px";
// p.style.width = "250px";
// p.style.textAlign = "center";

p.setAttribute('class', 'highlight');

/*
 * window resize
 */
