//Get number of currently opened tabs and send back to active content script page
chrome.runtime.onConnect.addListener(function (port) {
  if (port.name === "contentScriptConnection") {
    console.log("Connected to content script")
    port.onMessage.addListener(function (message) {
      chrome.tabs.query({ currentWindow: true }, function (tabs) {
        port.postMessage({ tabsLength: tabs.length })
      })
    })
  }
})