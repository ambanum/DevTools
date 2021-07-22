// ==UserScript==
// @name         Better Hangout
// @namespace    awesome-tools
// @version      0.0.1
// @description  Automatically accept posting to slack when using /hangout
// @match        https://meet.google.com/*
// @copyright    2021 Martin RATINAUD
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

/* global $ */

let confirmAttempts = 0;
let joinAttempts = 0;

let confirmInterval;
let joinButtonInterval;

$(document).ready(function () {
  confirmInterval = setInterval(checkConfirmDialog, 1000);

  function clickJoin() {
    const joinButton = $('span:contains(\'Join now\')');
    joinAttempts++;
    console.log(joinAttempts, joinButton);
    if (joinAttempts > 20 || joinButton) {
      clearInterval(joinButtonInterval);
    }

    if (joinButton) {
      joinButton.click();
    }
  };

  function checkConfirmDialog() {
    const button = $('span:contains(\'Post\')');
    confirmAttempts++;
    console.log(confirmAttempts, button);
    if (confirmAttempts > 20 || button) {
      clearInterval(confirmInterval);
    }

    if (button) {
      button.click();
      joinButtonInterval = setInterval(clickJoin, 1000);
      clickJoin();
    }
  };

  checkConfirmDialog();
});
