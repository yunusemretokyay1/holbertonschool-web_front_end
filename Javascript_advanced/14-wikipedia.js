function createElement(data) {
    const p = document.createElement('p');
    p.innerText = data;
    document.body.appendChild(p);
}

function queryWikipedia(callback) {
    const stackoverflowRequest = new XMLHttpRequest();
    stackoverflowRequest.onload = function () {
        callback(
            JSON.parse(
                stackoverflowRequest.responseText
            ).query.pages[21721040].extract
        );
    }

    // Use cors-anywhere proxy to bypass Same-Origin Policy
    const corsProxy = 'https://cors-anywhere.herokuapp.com/';
    const wikipediaURL = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';
    stackoverflowRequest.open('GET', corsProxy + wikipediaURL);
    stackoverflowRequest.send();
    