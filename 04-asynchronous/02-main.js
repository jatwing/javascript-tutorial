const btn = document.querySelector('button');
// second paramter is a call back function.
btn.addEventListener('click', () => {
  alert('You clicked me!');

  let pElem = document.createElement('p');
  pElem.textContent = 'This is a newly-added paragraph.';
  document.body.appendChild(pElem);
});

function loadAsset(url, type, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.responseType = type;
  xhr.onload = () => callback(xhr.response);
  xhr.send();
}

function displayImage(blob) {
  let objectURL = URL.createObjectURL(blob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
}

loadAsset('public/coffee.jpg', 'blob', displayImage);

// promises
fetch('public/products.json')
  .then((response) => response.json())
  .then((json) => {
    console.log(JSON.stringify(json));
  })
  .catch((error) => console.log(`Fetch problem: ${error.message}`));

// promise 2

console.log('Starting');
let image;

fetch('public/coffee.jpg')
  .then((response) => {
    console.log('It worked :)');
    return response.blob();
  })
  .then((myBlob) => {
    let objectURL = URL.createObjectURL(myBlob);
    image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
    return image;
  })
  .then((image) => {
    console.log(`All done! ${image.src} displayed`);
  })
  .catch((error) => {
    console.log(
      'There has been a problem with your fetch operation: ' + error.message
    );
  });
