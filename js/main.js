"use strict";

let startText = document.getElementsByClassName('crop-text')[0];
let getStartText = startText.innerText;
let cropText = getStartText.slice(0, 200);

let btnMore = document.createElement('a');
btnMore.classList.add("btn-more");
btnMore.innerHTML = 'Подробнее...';

let btnHide = document.createElement('a');
btnHide.classList.add("btn-hide");
btnHide.innerHTML = 'Скрыть...';

console.log(startText);
console.log(getStartText);
console.log(cropText);

function fullText() {
  startText.innerHTML = getStartText;
  startText.innerHTML = getStartText;
  startText.append(btnHide);
}

function hideText() {
  startText.innerHTML = cropText;
  startText.append(btnMore);
}

if (getStartText.length > 100) {
  startText.innerHTML = cropText;
  startText.append(btnMore);
}

btnMore.onclick = fullText;
btnHide.onclick = hideText;

console.log(cropText);