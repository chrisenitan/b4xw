//Gets tab count from sw and checks before closing if tab is the last in window or essentially the first tab opened
//requires sticky activation https://developer.mozilla.org/en-US/docs/Glossary/Sticky_activation
window.addEventListener("load", function () {
  const port = chrome.runtime.connect({ name: "contentScriptConnection" })
  port.postMessage({ message: "Registering tab with background" })
  port.onMessage.addListener(function ({ tabsLength }) {
    if (tabsLength == 1) {
      console.log(`Adding unload event to last tab ${tabsLength}`)
      window.addEventListener("beforeunload", function (event) {
        event.preventDefault()
        return ""
      })
    }
  })
})
