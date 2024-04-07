//Gets tab count from sw and checks before closing if tab is the last in window
//requires at least one interaction with the page after load event is fired
window.addEventListener("load", function () {
  var port = chrome.runtime.connect({ name: "contentScriptConnection" })
  port.postMessage({ message: "Registering tab with background" })
  port.onMessage.addListener(function (message) {
    const { totalTabs } = message
    if (totalTabs == 1) {
      console.log(`Adding unload event to last tab ${totalTabs}`)
      window.addEventListener("beforeunload", function (event) {
        event.preventDefault()
        return ""
      })
    }
  })
})
