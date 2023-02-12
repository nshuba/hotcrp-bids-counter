'use strict';

// Listen for message
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  var positiveBids = 0;
  const prefElements = document.getElementsByClassName('revpref');
  for (const element of prefElements) {
    if (element.value > 0)
      positiveBids++;
  }

  console.log("Positive bids = " + positiveBids);
  sendResponse({positiveBids: positiveBids});
});
