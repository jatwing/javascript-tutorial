const btn = document.querySelector("button");

// worker run only if the files are served via  HTTP or HTTPS protocol
const worker = new Worker("01-worker.js");

btn.addEventListener("click", () => {
  worker.postMessage("Go!");

  let pElem = document.createElement("p");
  pElem.textContent = "This is a newly-added paragraph.";
  document.body.appendChild(pElem);
});

worker.onmessage = function (e) {
  console.log(e.data);
};
