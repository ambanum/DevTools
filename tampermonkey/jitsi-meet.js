// ==UserScript==
// @name         Better Jitsi Meet
// @namespace    awesome-tools
// @version      0.0.1
// @description  Automatically accept posting to slack when using /hangout
// @match        https://meet.jit.si/*
// @copyright    2021 Martin RATINAUD
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

/* global $ */

$(document).ready(function () {
  const interval = setInterval(setName, 1000);

  function setName() {
    const button = document.querySelector("[aria-label='Join meeting']");
    console.log(button);

    if (button) {
      setTimeout(() => button.click(), 1000);
      clearInterval(interval);
    }
  }

  setName();
});
