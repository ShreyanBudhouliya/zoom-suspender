/* global chrome, alert, prompt, confirm */

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});

// Currently, any url containing this pattern will be suspended
var queryInfo = {
  url: "https://*.zoom.us/*"
};

// Remove all zoom tabs
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "close_current_tab" ) {
      chrome.tabs.query(queryInfo, function(tabs){
        for(i=0;i<tabs.length;i++){
          var zoomTab = tabs[i].id
          chrome.tabs.remove(zoomTab,function(){})
        }
      })
    }
  }
);