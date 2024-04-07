//Gets tab count from sw and checks before closing if tab is the last in window
window.addEventListener("load", function () {
  var port = chrome.runtime.connect({ name: "contentScriptConnection" })
  port.postMessage({ message: "Registering tab with background" })
  port.onMessage.addListener(function (message) {
    const { totalTabs } = message
    if (totalTabs == 1) {
      console.log(`Confirming last tab close`)
      window.addEventListener("beforeunload", function (event) {
        event.preventDefault()
        return ""
      })
    }
  })
})
