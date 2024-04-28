//Get the number of currently opened tabs for content script page. https://developer.chrome.com/docs/extensions/reference/api/tabs
chrome.runtime.onConnect.addListener(function (port) {
  if (port.name === "contentScriptConnection") {
    console.log("Connected to content script")
    port.onMessage.addListener(function (message) {
      console.log(message)
      chrome.tabs.query({ currentWindow: true }, function (tabs) {
        port.postMessage({ tabsLength: tabs.length, tabs: tabs })
      })
    })
  }
})
