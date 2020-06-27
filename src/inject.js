/* global fetch, Request, Headers, chrome, localStorage */

// content.js for zoom suspender
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      // send background page request to close a tab
      console.log("check if possible")
      console.log("sending message to background")
      chrome.runtime.sendMessage({"message": "close_current_tab"});
    }
  }
);