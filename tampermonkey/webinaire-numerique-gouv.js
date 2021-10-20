// ==UserScript==
// @name         Better Webinaire Numerique Gouv
// @namespace    awesome-tools
// @version      0.0.1
// @description  Automatically accept posting to slack when using /hangout
// @match        https://webinaire.numerique.gouv.fr//meeting/*
// @match        https://bbb-dinum-w1.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w2.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w3.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w4.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w5.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w6.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w7.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w8.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w9.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w10.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w11.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w12.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w13.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w14.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w15.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w16.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w17.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w18.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w19.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w20.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w21.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w22.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w23.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w24.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w25.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w26.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w27.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w28.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w29.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w30.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w31.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w32.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w33.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w34.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w35.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w36.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w37.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w38.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w39.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w40.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w41.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w42.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w43.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w44.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w45.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w46.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w47.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w48.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w49.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w50.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w51.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w52.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w53.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w54.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w55.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w56.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w57.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w58.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w59.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w60.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w61.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w62.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w63.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w64.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w65.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w66.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w67.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w68.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w69.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w70.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w71.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w72.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w73.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w74.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w75.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w76.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w77.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w78.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w79.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w80.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w81.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w82.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w83.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w84.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w85.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w86.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w87.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w88.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w89.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w90.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w91.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w92.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w93.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w94.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w95.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w96.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w97.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w98.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w99.visio.education.fr/html5client/join?sessionToken=*
// @match        https://bbb-dinum-w100.visio.education.fr/html5client/join?sessionToken=*
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
