//Gets tab count from sw and checks before closing if tab is the last in window
//requires sticky activation https://developer.mozilla.org/en-US/docs/Glossary/Sticky_activation

const beforeUnload = (event) => {
  event.preventDefault()
  return ""
}

function checkTabCountAndSetUnload() {
  const port = chrome.runtime.connect({ name: "contentScriptConnection" })
  port.postMessage({ message: "Registering tab with background script" })
  port.onMessage.addListener(function ({ tabsLength }) {
    if (tabsLength === 1) {
      console.log(`Adding unload event to last tab ${tabsLength}`)
      window.addEventListener("beforeunload", beforeUnload)
    } else {
      window.removeEventListener("beforeunload", beforeUnload)
    }
  })
}

// Check tab count on load
checkTabCountAndSetUnload()

// Check tab count on focus
window.addEventListener("focus", checkTabCountAndSetUnload)
