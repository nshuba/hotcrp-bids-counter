'use strict';

import './popup.css';

(function () {
  console.log("Init");

  function getBidsCount() {
    // Communicate with content script of
    // active tab by sending a message
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];

      chrome.tabs.sendMessage(
        tab.id,
        {
          type: 'COUNT',
        },
        (response) => {
          console.log('Current count value passed to contentScript file');
          console.log(response);
          document.getElementById('counter').innerHTML = response.positiveBids;
        }
      );
    });
  }

  document.addEventListener('DOMContentLoaded', getBidsCount);
})();
