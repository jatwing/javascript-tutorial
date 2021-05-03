const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Looping through images */
const srcs = [
  "public/pic1.jpg",
  "public/pic2.jpg",
  "public/pic3.jpg",
  "public/pic4.jpg",
  "public/pic5.jpg",
];
srcs.forEach((src) => {
  const image = document.createElement("img");
  image.setAttribute("src", src);
  thumbBar.appendChild(image);
  image.addEventListener("click", () => {
    displayedImage.setAttribute("src", src);
  });
});

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
  const className = btn.getAttribute('class')
  if (className === 'dark') {
    btn.setAttribute('class', 'light')
    btn.textContent = 'Lighten'
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'
  } else if (className === 'light') {
    btn.setAttribute('class', 'dark')
    btn.textContent = 'Darken'
    overlay.style.backgroundColor = 'rgba(0,0,0,0)'
  }
})


