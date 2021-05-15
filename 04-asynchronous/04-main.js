const promise = fetch('public/coffee.jpg');
promise
  .then((response) => {
    if (response.ok) {
      return response.blob();
    }
    throw new Error(`HTTP error! status: ${response.status}`);
  })
  .then((blob) => {
    const url = URL.createObjectURL(blob);
    const image = document.createElement('img');
    image.src = url;
    document.body.appendChild(image);
  })
  .catch((e) => {
    console.log(
      'There has been a problem with your fetch operation: ' + e.message
    );
  });

/*
 * multiple promises fulfilling
 */
function fetchAndDecode(url) {
  return fetch(url)
    .then((response) => {
      if (response.ok) {
        const type = response.headers.get('content-type');
        if (type.includes('text')) {
          return response.text();
        }

        return response.blob();
      }

      throw new Error(`HTTP error! status: ${response.status}`);
    })
    .catch((e) => {
      console.log(
        `There has been a problem with your fetch operation for resource "${url}": ` +
          e.message
      );
    }).finally(() => {
    console.log(`fetch attempt for "${url}" finished.`);
  });;
}

let coffee = fetchAndDecode('public/coffee.jpg');
let tea = fetchAndDecode('public/tea.jpg');
let description = fetchAndDecode('public/description.txt');

Promise.all([coffee, tea, description]).then((values) => {
  values.forEach((v) => {
    let element = null;
    if (v instanceof Blob && v.type.includes('image')) {
      const url = URL.createObjectURL(v);
      element = document.createElement('img');
      element.src = url;
    } else if (typeof v === 'string') {
      element = document.createElement('p');
      element.textContent = v;
    }
    if (element) {
      document.body.appendChild(element);
    }
  });
});


/*
 * Promise constructor
 */
function timeoutPromise(message, interval) {
  return new Promise((resolve, reject) => {
    if (message === '' || typeof message !== 'string') {
      reject('Message is empty or not a string');
    } else if (interval < 0 || typeof interval !== 'number') {
      reject('Interval is negative or not a number');
    } else {
      setTimeout(function(){
        resolve(message);
      }, interval);
    }
  });
};
timeoutPromise('Hello there!', 1000)
.then(alert)
.catch(e => {
  console.log(`Error: ${e}`)
})

