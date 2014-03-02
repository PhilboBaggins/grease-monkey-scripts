// ==UserScript==
// @name        YouTube video info button
// @namespace   youtube-video-info-button
// @description Adds a button to youtube pages that, when clicked, will display infomation about YouTube video in Markdown format.
// @include     http://www.youtube.com/watch?*
// @include     https://www.youtube.com/watch?*
// @match       http://www.youtube.com/watch?*
// @match       https://www.youtube.com/watch?*
// @grant       none
// @author      Phil
// @license     MIT License
// @updateURL   https://github.com/PhilboBaggins/grease-monkey-scripts/raw/master/youtube-video-info-button.user.js
// @version     1
// ==/UserScript==

function parseQuery(query) {
    if (!query)
        return;
    var retVal = {};
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        var key = pair[0];
        retVal[key] = pair[1];
    }
    return retVal;
}

function getVideoData(callback) {
    var query = window.location.search.substring(1);
    var items = parseQuery(query);
    if (items && items.v) {
        GM_xmlhttpRequest({
            method: "GET",
            url: 'https://gdata.youtube.com/feeds/api/videos/' + items.v + '?v=2&alt=jsonc',
            onload: function(xhr) {
                var data = JSON.parse(xhr.responseText);
                callback(data);
            }
        });
    }
}

function addButton(video) {
    var markdownData = '# ' + video.data.title
                     + '\n'
                     + '\n* URL: https://www.youtube.com/watch?v=' + video.data.id
                     + '\n* Uploaded: ' + video.data.uploaded
                     + '\n* Updated: ' + video.data.updated
                     + '\n* Uploaded by: [' + video.data.uploader + '](https://www.youtube.com/user/' + video.data.uploader + ')'
                     + '\n'
                     + '\n## Description'
                     + '\n'
                     + '\n' + video.data.description
                     + '\n';

    var videoTitleElm = document.getElementById('eow-title');
    videoTitleElm.innerHTML += '<input id="show-youtube-video-info-button" type="button" value="Show video info" />';

    var button = document.getElementById('show-youtube-video-info-button');
    button.addEventListener('click', function() { alert(markdownData); }, true);
}

window.addEventListener("load", function(e) {
    getVideoData(addButton);
}, false);
