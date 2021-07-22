// ==UserScript==
// @name         Better CloudWatch
// @namespace    awesome-tools
// @version      0.0.1
// @description  Add direct link to close error logs when looking at an error id
// @match        https://console.aws.amazon.com/*
// @copyright    2021 Martin RATINAUD
// @require      http://code.jquery.com/jquery-latest.js
// @grant        GM_addStyle
// ==/UserScript==

/* global $,GM_addStyle */

$(document).ready(function () {
  // Click on Query Button
  let runQueryInterval = setInterval(() => {
    const iframe = $('#microConsole-Logs').contents();
    const queryButton = iframe.find('button.awsui-button.awsui-button-variant-primary.awsui-hover-child-icons');

    if (queryButton && queryButton.length) {
      queryButton.click();
      runQueryInterval = clearInterval(runQueryInterval);
    }
  }, 100);

  // Click on Query Button
  const runTableInterval = setInterval(() => {
    if (runQueryInterval) {
      return;
    }
    const iframe = $('#microConsole-Logs').contents();

    const table = iframe.find('.logs-table__body-row td');
    if (table && table.length) {
      let tds = [];
      table.each((_, val) => {
        tds.push($(val).text());
      });

      const log = tds[3].split(':')[1].replace(/\//gi, '$252F');
      const logStream = tds[5];
      const timestamp = tds[9];
      const url = `https://console.aws.amazon.com/cloudwatch/home?region=us-east-1#logsV2:log-groups/log-group/${log}/log-events/${logStream}$3FfilterPattern$3D$26start$3D${timestamp}`;

      table.find('.logs-table__body-row tbody').append('<tr><td>LINK</td></tr>');
      $('body').append(`<div class="hooked-link"><a href="${url}" target="_blank">${url}</a></div>`);
      clearInterval(runTableInterval);
    }
  }, 300);

  // Colorize logs
  setInterval(() => {
    const iframe = $('#microConsole-Logs').contents();

    const table = iframe.find('.logs__log-events-table__cell > span:not(.hooked-colored)');
    const all = iframe.find('.logs__log-events-table__cell > span');

    if (table && table.length) {
      all.each((_, val) => {
        $(val).addClass('hooked-colored');
        const html = $(val).html();

        if (!html.includes('<span ')) {
          // FIXME .hooked-colored style never applied
          $(val).html($(val).text()
          .replaceAll('[WARN]',`<span style="border-radius: 3px;padding: 2px 5px;background-color:#ffc107;color: #333;">WARN</span>`)
          .replaceAll('[ERROR]',`<span style="border-radius: 3px;padding: 2px 5px;background-color:#EF2D56;color: #FFF;">ERROR</span>`)
          .replaceAll('[INFO]',`<span style="border-radius: 3px;padding: 2px 5px;background-color:#4f85ff;color: #FFF;">INFO</span>`)
          .replaceAll('[DEBUG]',`<span style="border-radius: 3px;padding: 2px 5px;background-color:#818182;color: #FFF;">DEBUG</span>`)
        )
        }
      });
    }
  }, 1000);



});

GM_addStyle(`
.awesome-dev-tools-colored {
  background: red; /* FIXME NEVER APPLIED */
}

.awesome-dev-tools-link {
  position:fixed;
  bottom:0;
  z-index:10000000;
  left:0;
  right:0;
  padding: 10px;
  color:#FFF!important;
  background:#4f85ff;
}

.awesome-dev-tools-link a {
  color:#FFF!important;
}
`);
