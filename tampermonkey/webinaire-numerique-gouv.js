// ==UserScript==
// @name         Better Webinaire Numerique Gouv
// @namespace    awesome-tools
// @version      0.0.1
// @description  Automatically accept posting to slack when using /hangout
// @match        https://webinaire.numerique.gouv.fr//meeting/*
// @copyright    2021 Martin RATINAUD
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

const username = "Martin Ratinaud @AmbNum";

$(document).ready(function () {
  const interval = setInterval(setName, 1000);

  function setName() {
    const input = document.querySelector("input[name='fullname']");

    if (input) {
      input.value = username;
      clearInterval(interval);
      const button = document.querySelector("[type='submit']");

      button.click();
    }
  }
});
