// Get active tab's hostname
const site = window.location.hostname

// Function to inject inline JavaScript code
function injectJSCode(code) {
    // Create a new `<script>` element
    const scriptElement = document.createElement('script');
    // Set the `type` attribute to `text/javascript`
    scriptElement.setAttribute('type', 'text/javascript');
    // Set the `textContent` property for the inline JavaScript code
    scriptElement.textContent = code;
    // Append the `<script>` element to the document's `documentElement` element (before </html>)
    document.documentElement.appendChild(scriptElement);
}

// Function to inject external JavaScript file
function injectJSLink(src) {
    // Create a new `<script>` element
    const scriptElement = document.createElement('script');
    // Set the `type` attribute to `text/javascript`
    scriptElement.setAttribute('type', 'text/javascript');
    // Set the `src` attribute for the URL of the external JavaScript file
    scriptElement.setAttribute('src', src);
    // Append the `<script>` element to the document's `documentElement` element (before </html>)
    document.documentElement.appendChild(scriptElement);
}




/* -------------------------------------------------------------- */
/* -------------------------------------------------------------- */
/* Example #1: inject same code into list of websites using array */
/* -------------------------------------------------------------- */
/* -------------------------------------------------------------- */
// Websites list to inject
const injectTo = [
    '127.0.0.1',
    'www.google.com',
    'www.youtube.com',
    'www.wikipedia.org'
];

// Inject codes into websites list
if (injectTo.includes(site)) {
    // Inject inline JS code #1
    injectJSCode(`
        alert('💉 A JavaScript Alert!');
        console.log('💉 Some Inline JavaScript Code! 1');
        console.log('💉 Some Inline JavaScript Code! 2');
        console.log('💉 Some Inline JavaScript Code! 3');
    `);

    // Inject inline JS code #2
    injectJSCode(`
        console.log('💉 Some Inline JavaScript Code! 4');
        console.log('💉 Some Inline JavaScript Code! 5');
    `);

    // Inject inline JS code #3
    injectJSCode(`
        console.log('💉 Some Inline JavaScript Code! 6');
    `);

    // Inject external JS file #1
    injectJSLink('https://cdn.jsdelivr.net/npm/chart.js');

    // Inject external JS file #2
    injectJSLink('https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js');

    // Inject external JS file #3
    injectJSLink('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js');
}




/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
/* Example #2: inject same code into multiple websites using Logical OR (||) */
/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
if (
    site.includes('127.0.0.1') ||
    site.includes('www.google.com') ||
    site.includes('www.youtube.com') ||
    site.includes('www.wikipedia.org')
) {
    // Put your injection process right here
}




/* -------------------------------------------------------- */
/* -------------------------------------------------------- */
/* Example #3: inject separate codes into separate websites */
/* -------------------------------------------------------- */
/* -------------------------------------------------------- */
// Inject codes into `127.0.0.1`
if (site.includes('127.0.0.1')) { /* Put your injection process right here */ }

// Inject codes into `www.google.com`
if (site.includes('www.google.com')) { /* Put your injection process right here */ }

// Inject codes into `www.youtube.com`
if (site.includes('www.youtube.com')) { /* Put your injection process right here */ }

// Inject codes into `www.wikipedia.org`
if (site.includes('www.wikipedia.org')) { /* Put your injection process right here */ }
