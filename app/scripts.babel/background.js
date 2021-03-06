chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.setBadgeText({text: 'Make'});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request == 'screenshot') {
    chrome.tabs.captureVisibleTab(null, {quality: 100, format: 'png'}, function(image) {
      console.log('captured image');
      sendResponse(image);
    });
  }
  return true;
});
