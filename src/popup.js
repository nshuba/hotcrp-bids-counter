'use strict';

import './popup.css';

(function () {
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
          console.log(response);
          document.getElementById('totalCounter').innerHTML = "Positive Bids: " + response.positiveBids;
          document.getElementById('counter3').innerHTML = "Score 3: " + response.bids3;
          document.getElementById('counter2').innerHTML = "Score 2: " + response.bids2;
          document.getElementById('counter1').innerHTML = "Score 1: " + response.bids1;
        }
      );
    });
  }

  document.addEventListener('DOMContentLoaded', getBidsCount);
})();
