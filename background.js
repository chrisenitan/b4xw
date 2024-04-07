//Get number of currently opened tabs and send back to active content script page
chrome.runtime.onConnect.addListener(function (port) {
  if (port.name === "contentScriptConnection") {
    console.log("Connected to content script")
    port.onMessage.addListener(function (message) {
      console.log("Received activation from tab content script")
      let totalTabs = 0
      chrome.tabs.query({ currentWindow: true }, function (tabs) {
        totalTabs = tabs.length
        port.postMessage({ totalTabs })
      })
    })
  }
})
