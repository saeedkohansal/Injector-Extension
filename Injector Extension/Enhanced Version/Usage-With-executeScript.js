chrome.scripting.executeScript({
    target: { tabId: tabId, allFrames: true },
    files: ["script.js"],
    /*
    • Possible values are:
    "ISOLATED" and "MAIN"
    • Equivalent values are:
    chrome.scripting.ExecutionWorld.ISOLATED and chrome.scripting.ExecutionWorld.MAIN
    */
    world: "MAIN"
});
