"use strict";

let startText = document.getElementsByClassName('crop-text');
let getStartText;
let cropText;

let btnMore;
let btnHide;

let textContainer = document.getElementById('crop');
let textCountElem = textContainer.childElementCount;

let massText = [];
let massCrop = [];

function fullText() {
  // startText.innerHTML = getStartText;
  // startText.innerHTML = getStartText;
  // startText.append(btnHide);
  btnHide = document.createElement('a');
  btnHide.classList.add("btn-hide");
  btnHide.innerHTML = 'Скрыть...';
}

function hideText() {
  startText.innerHTML = cropText;
  startText.append(btnMore);
}

for (let i = 0; i < textCountElem; i++) {
  btnMore = document.createElement('a');
  btnMore.classList.add("btn-more");
  btnMore.innerHTML = 'Подробнее...';

  massText.push(startText[i].innerText);
  massCrop.push(massText[i].slice(0, 200));

  startText[i].innerHTML = massCrop[i];
  startText[i].append(btnMore);
}
