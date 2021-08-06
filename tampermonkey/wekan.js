// ==UserScript==
// @name         Better Wekan
// @namespace    awesome-tools
// @version      0.0.1
// @description  Make wekan better
// @grant        GM_addStyle
// @match        https://ambanum-wekan.ethibox.fr/*
// @copyright    2021 Martin RATINAUD
// ==/UserScript==

GM_addStyle(`
    .better-wekan-label {
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
`);

const mainSelector = ".swimlane.js-lists";

const opacifyStandby = (minicard) => {
  minicard.style.opacity = minicard.innerHTML.includes("[STANDBY]") ? 0.2 : 1;
};

const createLabels = (p) => {
  const match = p.innerHTML.match(/\[(.*?)\]/);
  if (match && match[1]) {
    if (p.querySelector("div")) {
      p.querySelector("div").innerHTML = match[1];
    } else {
      var new_row = document.createElement("div");
      new_row.classList.add("better-wekan-label");
      new_row.innerHTML = match[1];
      p.insertBefore(new_row, p.firstChild);
      opacifyStandby(p.parentNode.parentNode.parentNode);
    }
  } else {
    p.querySelector("div") && p.querySelector("div").remove();
  }
};

const observer = new MutationObserver((mutations) => {
  for (let mutation of mutations) {
    if (
      mutation.type === "childList" &&
      mutation.target.classList.contains("viewer")
    ) {
      mutation.target.querySelectorAll("p").forEach(createLabels);
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
    document.querySelectorAll(".minicard").forEach(opacifyStandby);
    document.querySelectorAll(".minicard p").forEach(createLabels);
  }
};

const interval = setInterval(setObserver, 1000);
