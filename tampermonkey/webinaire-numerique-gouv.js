// ==UserScript==
// @name         Better Webinaire Numerique Gouv
// @namespace    awesome-tools
// @version      0.0.1
// @description  Automatically accept posting to slack when using /hangout
// @match        https://webinaire.numerique.gouv.fr//meeting/*
// @match        https://bbb-dinum-w16.visio.education.fr/html5client/*
// @copyright    2021 Martin RATINAUD
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

const log = (...args) =>
  console.log("[BETTER Webinaire Numerique Gouv]", ...args);

const username = "Martin Ratinaud @AmbNum";

const clickWhenOnScreen = (selector) => {
  log(`Waiting for ${selector}`);
  let interval;

  const click = () => {
    const button = document.querySelector(selector);

    if (button) {
      log(`Found ${selector} and clicked`);
      clearInterval(click);
      button.click();
    }
  };
  interval = setInterval(click, 1000);
};

$(document).ready(function () {
  const interval = setInterval(setName, 1000);
  // const micInterval = setInterval(clickMicrophone, 1000);
  // const webcamInterval = setInterval(clickWebcam, 1000);
  // const startInterval = setInterval(clickWebcam, 1000);

  function setName() {
    const input = document.querySelector("input[name='fullname']");

    if (input) {
      input.value = username;
      clearInterval(interval);
      const button = document.querySelector("[type='submit']");

      button.click();
    }
  }

  clickWhenOnScreen("button[aria-label='Microphone']");
  clickWhenOnScreen("button[aria-label='Share webcam']");
  clickWhenOnScreen("button[aria-label='Start sharing']");

  // function clickMicrophone() {
  //   const button = document.querySelector("button[aria-label='Microphone']");

  //   if (button) {
  //     clearInterval(micInterval);
  //     button.click();
  //   }
  // }

  // function clickWebcam() {
  //   const button = document.querySelector("button[aria-label='Share webcam']");

  //   if (button) {
  //     clearInterval(webcamInterval);
  //     button.click();
  //   }
  // }
  // function clickSharingWebcam() {
  //   const button = document.querySelector("button[aria-label='Start sharing']");

  //   if (button) {
  //     clearInterval(webcamInterval);
  //     button.click();
  //   }
  // }
});
