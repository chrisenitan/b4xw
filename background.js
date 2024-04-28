//Get the number of currently opened tabs for content script page
chrome.runtime.onConnect.addListener(function (port) {
  if (port.name === "contentScriptConnection") {
    console.log("Connected to content script")
    port.onMessage.addListener(function (message) {
      chrome.tabs.onUpdated.addListener(function (tabId, removeInfo) {
        port.postMessage({ tabsLength: 1, tabs: tabId })
      })
      chrome.tabs.query({ currentWindow: true }, function (tabs) {
        port.postMessage({ tabsLength: tabs.length, tabs: tabs })
      })
    })
  }
})
