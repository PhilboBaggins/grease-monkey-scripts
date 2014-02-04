// ==UserScript==
// @name        YouTube query cleaner
// @description Removes junk from YouTube URLs
// @namespace   youtube-query-cleaner
// @include     http://www.youtube.com/watch?*
// @include     https://www.youtube.com/watch?*
// @match       http://www.youtube.com/watch?*
// @match       https://www.youtube.com/watch?*
// @homepageURL ???????????????????
// @updateURL   ???????????????????
// @author      Phil
// @date        2013-05-22
// @license     MIT License
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

var query = window.location.search.substring(1);
var items = parseQuery(query);
if (items && items.v) {
    // Should consider https://news.ycombinator.com/item?id=6251585

    var newURL = window.location.protocol + '//www.youtube.com/watch?v=' + items.v + (items.t ? '&t='+items.t : '') //+ (items.hd ? '&hd='+items.hd : '')
    if (newURL !== window.location.href) {
        window.location.href = newURL;
    }
}
