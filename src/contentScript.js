'use strict';

// Listen for message
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  var bids = {
    positiveBids: 0,
    bids1: 0,
    bids2: 0,
    bids3: 0,
  }

  const prefElements = document.getElementsByClassName('revpref');
  for (const element of prefElements) {
    if (element.value > 0) {
      bids.positiveBids++;
      if (element.value == 1)
        bids.bids1++;
      else if (element.value == 2)
        bids.bids2++;
      else if (element.value == 3)
        bids.bids3++;
    }
      
  }

  console.log(bids);
  sendResponse(bids);
});
