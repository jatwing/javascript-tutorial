/*
 * fetching data
 */

// a modern replacement for XHR
const verseChoose = document.querySelector('select');
const poemDisplay = document.querySelector('pre');

const updateDisplay = async (verse) => {
  const name = verse.replace(' ', '').toLowerCase();
  const url = `public/${name}.txt`;
  const text = await fetch(url)
    .then((response) => {
      if (name === 'verse3') {
        throw new Error('error message');
      }
      if (!response.ok) {
        return `${response.status} ${response.statusText}`;
      }
      return response.text();
    })
    .catch((e) => e.message);
  poemDisplay.textContent = text;
};

verseChoose.value = 'Verse 1';
updateDisplay(verseChoose.value);
verseChoose.onchange = () => {
  updateDisplay(verseChoose.value);
};
