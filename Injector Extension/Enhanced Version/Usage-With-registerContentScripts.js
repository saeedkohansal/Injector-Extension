chrome.scripting.registerContentScripts([
    {
        id: "my-content-script",
        matches: ["https://*.example.com/*"],
        runAt: "document_start",
        js: ["content-script.js"],
        /*
        • Possible values are:
        "ISOLATED" and "MAIN"
        • Equivalent values are:
        chrome.scripting.ExecutionWorld.ISOLATED and chrome.scripting.ExecutionWorld.MAIN
        */
        world: "MAIN",
        allFrames: true
    }
]);
