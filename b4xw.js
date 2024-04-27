//b4xw.js https://developer.chrome.com/docs/extensions/reference/api
/**
 * Returns true if current tab contains at least 2 history states
 * Ideally, tab is old and has been used vs new tab
 */
const useUnloader = () => {
  const history = window.history.length
  return history > 2
}

//requires sticky activation https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event#usage_notes
window.addEventListener("load", function () {
  const port = chrome.runtime.connect({ name: "contentScriptConnection" })
  port.postMessage({ message: "Registering tab with background" })
  port.onMessage.addListener(function ({ tabsLength }) {
    if (tabsLength == 1) {
      window.addEventListener("beforeunload", function (event) {
        if (useUnloader()) event.preventDefault()
        return ""
      })
    }
  })
})
