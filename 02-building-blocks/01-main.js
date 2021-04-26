const selectWeather = document.querySelector('#weather');
const para = document.querySelector('p');
selectWeather.addEventListener('change', setWeather);
function setWeather() {
  const choice = selectWeather.value;
  /*
  const temperature = 27;
  if (choice === 'sunny' && temperature < 86) {
    para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
  } else if (choice === 'sunny' && temperature >= 86) {
    para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
  } else if (choice === 'rainy') {
    para.textContent =
      "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
  } else if (choice === 'snowing') {
    para.textContent =
      'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
  } else if (choice === 'overcast') {
    para.textContent =
      "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
  } else {
    para.textContent = '';
  }
  */
  switch (choice) {
    case 'sunny':
      para.textContent =
        'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
      break;
    case 'rainy':
      para.textContent =
        "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
      break;
    case 'snowing':
      para.textContent =
        'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
      break;
    case 'overcast':
      para.textContent =
        "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
      break;
    default:
      para.textContent = '';
  }

  const selectTheme = document.querySelector('#theme');
  const html = document.querySelector('html');
  document.body.style.padding = '10px';
  function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
  }
  selectTheme.onchange = function () {
    selectTheme.value === 'black'
      ? update('black', 'white')
      : update('white', 'black');
  };
}
