# Overview

B4xw (Before closing last tab) is a simple extension that helps make sure you don't unintentionally close the last tab in an active window by confirming with you if you really want tyo close the last tab in your window; therefore the whole window.
This confirmation is only done if it notices you have one tab left in your window.

#Features

1. Automatically adds an event to each page to check if the tab is the last in the window

#How To Use

1. Install extension

2. B4xw will stay in the background until you have one tab left

3. To uninstall the theme

   - Open your extension manager and select 'Remove from Chrome...'

#FAQs

- Does this work across multiple windows: B4xw isolates the counting of tabs per window.
- Does it work if I close the window. No, b4xw only kicks in if you close tabs individually. If you close the window at once, that follows normal behavior and window will be closed

#Permissions

- tabs

B4xw follows Chrome extensions guidelines and does not record or access any of your tab activity or data; it only counts the number of tabs open in a window and uses default Web API to confirm before closing.

#Developers
The project is available on Github if you want to extend or collaborate on this and other projects. Find repository at https://github.com/chrisenitan/b4xw
