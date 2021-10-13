// ==UserScript==
// @name         Better Ethibox Deck
// @namespace    awesome-tools
// @version      0.0.1
// @description  Make Ethibox Deck better
// @grant        GM_addStyle
// @match        https://*-nextcloud.ethibox.fr/apps/deck/#/board/*
// @copyright    2021 Martin RATINAUD
// ==/UserScript==

const log = (...args) => console.log("[BETTER ETHIBOX]", ...args);

console.log(
  "%c Loading @AmbNum Better Ethibox Deck",
  "background: green; color: white; display: block;"
);

GM_addStyle(`
    .better-ethibox-deck-label {
      padding: 3px 6px;
      position: absolute;
      color:white;
      top: 0;
      right: 0;
      font-weight: 700;
      top:0;
      right:0;
      font-size: 11px;
      background: #333;
    }
    .better-ethibox-deck-ongoing-list {
      background: #D7D7D7;
    }
    .better-ethibox-deck-ongoing-list .stack__header:before {
      background-image: none;
    }
`);

const mainClass = "board-wrapper";
const mainSelector = `.${mainClass}`;

const distinguishOngoing = () => {
  document
    .querySelector(
      ".smooth-dnd-container.horizontal > .smooth-dnd-draggable-wrapper:nth-child(3)"
    )
    .classList.add("better-ethibox-deck-ongoing-list");
};

// const opacifyStandby = (minicard) => {
//   minicard.style.opacity = minicard.innerHTML.includes("[STANDBY]") ? 0.2 : 1;
// };

// const createLabels = (p) => {
//   const match = p.innerHTML.match(/\[(.*?)\]/);
//   if (match && match[1]) {
//     if (p.querySelector("div")) {
//       p.querySelector("div").innerHTML = match[1];
//     } else {
//       var new_row = document.createElement("div");
//       new_row.classList.add("better-ethibox-deck-label");
//       new_row.innerHTML = match[1];
//       p.insertBefore(new_row, p.firstChild);
//       opacifyStandby(p.parentNode.parentNode.parentNode);
//     }
//   } else {
//     p.querySelector("div") && p.querySelector("div").remove();
//   }
// };

const observer = new MutationObserver((mutations) => {
  for (let mutation of mutations) {
    if (
      mutation.type === "childList" &&
      mutation.target.classList.contains(mainClass)
    ) {
      distinguishOngoing();
    }
  }
});

const setObserver = () => {
  const observated = document.querySelector(mainSelector);

  if (observated) {
    clearInterval(interval);
    observer.observe(observated, {
      childList: true,
      subtree: true,
      characterData: true,
    });
    distinguishOngoing();
    // document.querySelectorAll(".minicard").forEach(opacifyStandby);
    // document.querySelectorAll(".minicard p").forEach(createLabels);
  }
};

const interval = setInterval(setObserver, 1000);
