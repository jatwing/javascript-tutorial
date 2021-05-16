const myFetch = async () => {
  try {
    const response = await fetch('public/coffee.jpg');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const blob = await response.blob();
    const objectURL = URL.createObjectURL(blob);
    const image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
  } catch (e) {
    console.log(e);
  }
};
myFetch();

/*
 * await Promise.all()
 */
const fetchAndDecode = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
     const type = response.headers.get('content-type');
    if (type.includes('text')) {
      return response.text();
    }
    return response.blob();
  } catch (e) {
    console.log(
      `There has been a problem with your fetch operation for resource "${url}": ${e.message}`
    );
  } finally {
    console.log(`fetch attempt for "${url}" finished.`);
  }
};

const displayContent = async () => {
  try {
    let coffee = fetchAndDecode('public/coffee.jpg');
    let tea = fetchAndDecode('public/tea.jpg');
    let description = fetchAndDecode('public/description.txt');

    let values = await Promise.all([coffee, tea, description]);

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
  } catch (e) {
    console.log(e.message);
  }
};

displayContent();
