// ==UserScript==
// @name         Better ETHIBOX Agenda
// @namespace    awesome-tools
// @version      0.0.1
// @description  Better nextcloud display
// @grant        GM_addStyle
// @match        https://ambanum-nextcloud.ethibox.fr/apps/calendar/dayGridMonth/*
// @copyright    2021 Martin RATINAUD
// ==/UserScript==

const log = (...args) => console.log("[BETTER ETHIBOX AGENDA]", ...args);

console.log(
  "%c Loading @AmbNum Better Ethibox Agenda",
  "background: green; color: white; display: block;"
);

GM_addStyle(`
.fc-day-today > div {
  background: #D7D7D7;
}
`);
