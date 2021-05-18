// Defining a baseURL and key to as part of the request URL

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = '3Cm3bHxG1I3ROE2N94Y8vw7347XEAaQk';
let url;

// Grab references to all the DOM elements you'll need to manipulate

const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');

// This is never used
// const submitBtn = document.querySelector('.submit');

const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');

const section = document.querySelector('section');
const nav = document.querySelector('nav');

// Hide the "Previous"/"Next" navigation to begin with, as we don't need it immediately
nav.style.display = 'none';

// define the initial page number and status of the navigation being displayed
let pageNumber = 0;

// This is never used
// let displayNav = false;

// Event listeners to control the functionality

const displayResults = (json) => {
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }

  const articles = json.response.docs;

  if (articles.length === 10) {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
  }

  if (articles.length === 0) {
    const para = document.createElement('p');
    para.textContent = 'No results returned.';
    section.appendChild(para);
  } else {
    articles.forEach((a) => {
      const article = document.createElement('article');
      const heading = document.createElement('h2');
      const link = document.createElement('a');
      const img = document.createElement('img');
      const para1 = document.createElement('p');
      const para2 = document.createElement('p');
      const clearfix = document.createElement('div');

      link.href = a.web_url;
      link.textContent = a.headline.main;
      para1.textContent = a.snippet;
      para2.textContent = 'Keywords: ';

      a.keywords.forEach((k) => {
        const span = document.createElement('span');
        span.textContent += k.value + ' ';
        para2.appendChild(span);
      });

      if (a.multimedia.length > 0) {
        img.src = 'http://www.nytimes.com/' + a.multimedia[0].url;
        img.alt = a.headline.main;
      }

      clearfix.setAttribute('class', 'clearfix');

      article.appendChild(heading);
      heading.appendChild(link);
      article.appendChild(img);
      article.appendChild(para1);
      article.appendChild(para2);
      article.appendChild(clearfix);
      section.appendChild(article);
    });
  }
};

const fetchResults = (e) => {
  e.preventDefault();
  url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}&fq=document_type:("article")`;
  if (startDate.value !== '') {
    url += `&begin_date=${startDate.value}`;
  }
  if (endDate.value !== '') {
    url += `&end_date=${endDate.value}`;
  }

  fetch(url)
    .then((result) => result.json())
    .then((json) => {
      displayResults(json);
    });
};

const submitSearch = (e) => {
  pageNumber = 0;
  fetchResults(e);
};

searchForm.addEventListener('submit', submitSearch);

// pagination buttons
const nextPage = (e) => {
  pageNumber++;
  fetchResults(e);
};

const previousPage = (e) => {
  if (pageNumber <= 0) {
    return;
  }
  pageNumber--;
  fetchResults(e);
};

nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

